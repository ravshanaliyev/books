import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"

export const isAuthenicated = false
export const userRole = "admin"

const store = configureStore({
    reducer: rootReducer
})
export default store