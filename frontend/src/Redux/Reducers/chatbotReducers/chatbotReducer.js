import * as actions from "../../ActionTypes/index";

let initialState = {
  welcomeMessages: [],
  optionBotMessages: [],
  botConversationalMessages: [],
};

export const chatbotMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GETTING_FIRST_TREE_WELCOME_MESSAGES:
      return {
        ...state,
        welcomeMessages: action.payload,
      };

    case actions.GETTING_FIRST_NODE_OPTIONS:
      return {
        ...state,
        optionBotMessages: action.payload,
      };
    case actions.GETTING_ALL_NODE_MESSAGES:
      return {
        ...state,
        botConversationalMessages: [
          ...state.botConversationalMessages,
          action.payload,
        ],
      };
    default:
      return state;
  }
};
