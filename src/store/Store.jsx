
import { configureStore } from '@reduxjs/toolkit'
import aurthReducer from '../slices/Slice'

export const store = configureStore({
    reducer: {
        aurthReducer
    },
})