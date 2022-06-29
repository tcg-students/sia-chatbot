import { chatbotMessagesReducer } from "./chatbotReducers/chatbotReducer";
import { combinedReducers } from "redux";

export const rootReducer = combinedReducers({
  botConversation: chatbotMessagesReducer,
});
