import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
    name: "ticket",
    initialState: {
        currentTicket: null,
    },
    reducers: {
        setCurrentTicket(state, action) {
            state.currentTicket = action.payload;
        }
    }
});

export const { setCurrentTicket } = ticketSlice.actions;

export default ticketSlice.reducer;