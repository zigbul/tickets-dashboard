import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from '../../firebase';
import { collection, getDocs, doc, deleteDoc, setDoc, Timestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

export const getTickets = createAsyncThunk(
    'tickets/getTickets',
    async () => {
        const querySnapshot = await getDocs(collection(db, "tickets"));
        const tickets = [];
        querySnapshot.forEach((doc) => tickets.push(doc.data()));
        return tickets;
    }
)

export const addNewTicket = createAsyncThunk(
    'tickets/addNewTicket',
    async (data, {rejectWithValue, dispatch, getState}) => {
        const id = uuidv4();
        const { currentUser } = getState().user;
        const newTicket = {
            id: id,
            avatar: currentUser.photoURL,
            title: data.title,
            created: Timestamp.fromDate(Date.now()),
            updated: Timestamp.fromDate(Date.now()),
            userName: currentUser.displayName,
            priority: data.priority,
            text: data.text,
            uid: currentUser.uid,
            completed: false,
        }
        try {
            await setDoc(doc(db, "tickets", id), newTicket);
            dispatch(addTicket(newTicket))
        } catch(e) {
            rejectWithValue(e);
        }
    }
)

export const deleteTicket = createAsyncThunk(
    'tickets/deleteTicket',
    async (id, {rejectWithValue, dispatch}) => {
        try {
            await deleteDoc(doc(db, "tickets", id));
            dispatch(removeTicket(id));
        } catch(e) {
            rejectWithValue(e.message);
        }
    }
)

const ticketSlice = createSlice({
    name: "tickets",
    initialState: {
        tickets: [],
        loading: false,
        error: false,
    },
    reducers: {
        removeTicket(state, action) {
            state.tickets = state.tickets.filter( ticket => {
               return ticket.id !== action.payload;
            });
        },
        addTicket(state, action) {
            state.tickets.push(action.payload);
        }
    },
    extraReducers: {
        [getTickets.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [getTickets.fulfilled]: (state, action) => {
            state.tickets = action.payload;
            state.loading = false;
        },
        [getTickets.rejected]: (state) => {
            state.error = true;
        },
        [deleteTicket.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [deleteTicket.fulfilled]: (state) => {
            state.loading = false;
        },
        [deleteTicket.rejected]: (state) => {
            state.error = true;
        },
        [addNewTicket.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [addNewTicket.fulfilled]: (state) => {
            state.loading = false;
        },
        [addNewTicket.rejected]: (state) => {
            state.error = true;
        }
    }
});

const { removeTicket, addTicket } = ticketSlice.actions;

export default ticketSlice.reducer;