import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_LIMIT } from "./config";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            // state.messages.push(action.payload);   if we do push it'll show new messages at the top of the live chat but we want newer messages at the bottom of the live chat so we'll use unshift method
            state.messages.unshift(action.payload);
            state.messages.splice(LIVE_CHAT_LIMIT,2)
        }
    }
})

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;