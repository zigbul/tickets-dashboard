import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        error: false,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            window.localStorage.setItem("currentUser", JSON.stringify(action.payload));
        }
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;