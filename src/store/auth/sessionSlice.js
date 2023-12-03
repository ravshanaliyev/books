import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: '',
    signedIn: false
}
export const sessionSlice = createSlice({
    name: 'auth/session',
    initialState,
    reducers: {
        setSignedIn: (state, action) => {
            state.signedIn = true;
            state.token = action.payload
        },
        setSignedOut: (state) => {
            state.signedIn = false
            state.token = '';

        },
    }
})

export const { setSignedIn, setSignedOut } = sessionSlice.actions

export default sessionSlice.reducer