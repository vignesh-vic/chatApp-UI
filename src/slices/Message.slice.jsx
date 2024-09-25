import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedConversation: null,
    messages: [],
};

export const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setSelectConversation: (state, action) => {
            state.selectedConversation = action.payload;
        },
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        clearConversation: (state) => {
            state.selectedConversation = null;
            state.messages = [];
        },
    },
});

export const {
    setSelectConversation,
    setMessages,
    addMessage,
    clearConversation,
} = messageSlice.actions;

export default messageSlice.reducer;
