import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: '',
    signedIn: false
}
export const sessionSlice = createSlice({
    name: 'auth/session',
    initialState,
    reducers: {
        setSession: (state, action) => {
            state.token = action.payload.token
            state.signedIn = action.payload.signedIn
        }
    }
})

export const { setSession } = sessionSlice.actions

export default sessionSlice.reducer