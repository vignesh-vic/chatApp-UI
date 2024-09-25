import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoggedInDetails: (state, action) => {
            state.userData = action.payload

        },
    },
})

export const { setLoggedInDetails } = userSlice.actions

export default userSlice.reducer