import { createSlice } from "@reduxjs/toolkit"


const   initialState = {
    fullName: '',
    email: '',
    role: ''
}
export const  userSlice = createSlice({
    name: 'auth/user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.fullName = action.payload.fullName
            state.email = action.payload.email
            state.role = action.payload.role
        }
    }
})
export const { setUser} = userSlice.actions

export default userSlice.reducer
