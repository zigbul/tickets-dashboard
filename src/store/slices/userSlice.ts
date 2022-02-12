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
        [getUser.pending as any]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [getUser.fulfilled as any]: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        [getUser.rejected as any]: (state) => {
            state.loading = false;
            state.error = true;
        },
        [removeUser.pending as any]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [removeUser.fulfilled as any]: (state) => {
            state.currentUser = null;
            state.loading = false;
        },
        [removeUser.rejected as any]: (state) => {
            state.loading = false;
            state.error = true;
        }
    }
});

export default userSlice.reducer;