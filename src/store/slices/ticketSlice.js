import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db, ticketsCollectionRef } from '../../firebase';
import { getDocs, doc, deleteDoc, serverTimestamp, query, orderBy, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import { toastSucces, toastError } from "../../utils/toasts";
import { v4 as uuidv4 } from 'uuid';

const SORT_OPTIONS = {
    "TIME_ASC": {column: 'updated', direction: 'asc'},
    "TIME_DESC": {column: 'updated', direction: 'desc'},
    "PRIORITY_ASC": {column: 'priority', direction: 'asc'},
    "PRIORITY_DESC": {column: 'priority', direction: 'desc'},
}

export const getTickets = createAsyncThunk(
    'tickets/getTickets',
    async (sortBy = "TIME_DESC") => {
        const querySnapshot = await getDocs(query(ticketsCollectionRef, orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)));
        return querySnapshot.docs.map( doc =>({...doc.data(), id: doc.id}));
    }
)

export const getSingleTicket = createAsyncThunk(
    'tickets/getSingleTicket',
    async (id, {rejectWithValue}) => {
        try{
            const ticketRef = doc(db, "tickets", id);
            const ticketSnap = await getDoc(ticketRef);
            console.log(ticketSnap.data());
        } catch(e) {
            return rejectWithValue(e);
        }
        
    }
)

export const addNewTicket = createAsyncThunk(
    'tickets/addNewTicket',
    async (data, {rejectWithValue, dispatch, getState}) => {
        const { currentUser } = getState().user;
        const id = uuidv4();
        const newTicket = {
            avatar: currentUser.photoURL,
            title: data.title,
            created: serverTimestamp(),
            updated: serverTimestamp(),
            userName: currentUser.displayName,
            priority: data.priority,
            text: data.text,
            uid: currentUser.uid,
            completed: false,
            photoURL: currentUser.photoURL,
            displayName: currentUser.displayName,
            id,
        }
        try {
            dispatch(setCurrentTicket(newTicket));
            await setDoc(doc(ticketsCollectionRef, id), newTicket);
        } catch(e) {
            return rejectWithValue(e);
        }
    }
)

export const updateTicket = createAsyncThunk(
    'tickets/updateTicket',
    async (data, {rejectWithValue}) => {
        const ticketRef = doc(db, "tickets", data.id);
        try {
            await updateDoc(ticketRef, {...data, updated: serverTimestamp()});
        } catch(e) {
            return rejectWithValue(e);
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
            return rejectWithValue(e);
        }
    }
)

const ticketSlice = createSlice({
    name: "tickets",
    initialState: {
        tickets: [],
        loading: false,
        error: false,
        currentTicket: null,
    },
    reducers: {
        removeTicket(state, action) {
            state.tickets = state.tickets.filter( ticket => {
               return ticket.id !== action.payload;
            });
        },
        addTicket(state, action) {
            state.tickets.push(action.payload);
        },
        setCurrentTicket(state, action) {
            state.currentTicket = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
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
        [getSingleTicket.pending]: (state) => {
            state.loading = true;
        },
        [getSingleTicket.fulfilled]: (state) => {
            state.loading = false;
        },
        [getSingleTicket.rejected]: (state, action) => {
            console.log(action.payload);
        },
        [deleteTicket.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [deleteTicket.fulfilled]: (state, action) => {
            state.loading = false;
            toastSucces('Ticket Successfully Deleted!');
        },
        [deleteTicket.rejected]: (state) => {
            toastError('Cant Delete Your Ticket! :(');
            state.error = true;
        },
        [addNewTicket.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [addNewTicket.fulfilled]: (state, action) => {
            state.loading = false;
            toastSucces("New ticket created!");
        },
        [addNewTicket.rejected]: (state, action) => {
            state.error = true;
            console.log(action.payload);
            toastError("Oops, something go wrong!")
        },
        [updateTicket.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [updateTicket.fulfilled]: (state) => {
            state.loading = false;
            toastSucces("Updated!")
        },
        [updateTicket.rejected]: (state, action) => {
            state.error = true;
            console.log(action.payload);
            toastError("Error, not updated yet!")
        },
    }
});

export const { removeTicket, addTicket, setCurrentTicket, setLoading } = ticketSlice.actions;

export default ticketSlice.reducer;