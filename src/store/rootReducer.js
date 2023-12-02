import { combineReducers } from "redux"
import user from "./auth/userSlice"
import session from "./auth/sessionSlice"
const rootReducer = combineReducers({
    user,
    session
})

export default rootReducer