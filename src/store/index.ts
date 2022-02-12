import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import ticketReducer from './slices/ticketSlice';
import themeReducer from './slices/themeSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        ticket: ticketReducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});