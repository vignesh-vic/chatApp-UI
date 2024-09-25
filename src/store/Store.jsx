
import { configureStore } from '@reduxjs/toolkit'
import loggedInUser from '../slices/Slice'
import MessageSlice from '../slices/Message.slice'

export const store = configureStore({
    reducer: {
        loggedInUser,
        MessageSlice
    }
})