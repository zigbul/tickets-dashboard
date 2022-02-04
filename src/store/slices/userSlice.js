import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const getUser = createAsyncThunk(
    'user/getUser',
    async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        const result = await signInWithPopup(auth, provider);
        const { displayName, photoURL, uid } = result.user;
        return { displayName, photoURL, uid };
    }
)

export const removeUser = createAsyncThunk(
    'user/removeUser',
    async () => {
        const auth = getAuth();
        await auth.signOut();
    }
)

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [getUser.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [getUser.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        [getUser.rejected]: (state) => {
            state.loading = false;
            state.error = true;
        },
        [removeUser.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [removeUser.fulfilled]: (state) => {
            state.currentUser = null;
            state.loading = false;
        },
        [removeUser.rejected]: (state) => {
            state.loading = false;
            state.error = true;
        }
    }
});

export const {} = userSlice.actions;

export default userSlice.reducer;