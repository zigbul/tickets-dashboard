import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCurrentUser = createAsyncThunk(
    'user/fetchCurrentUser',
    async function() {

    }

)

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
    extraReducers: {
        [fetchCurrentUser.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [fetchCurrentUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        [fetchCurrentUser.rejected]: (state, action) => {},
    }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;