import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import ticketReducer from './slices/ticketSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        ticket: ticketReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});