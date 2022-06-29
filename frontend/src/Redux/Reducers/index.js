import { chatbotMessagesReducer } from "./chatbotReducers/chatbotReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  botConversation: chatbotMessagesReducer,
});
