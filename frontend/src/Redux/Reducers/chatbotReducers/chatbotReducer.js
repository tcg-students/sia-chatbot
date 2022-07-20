import * as actions from "../../ActionTypes/index";

let initialState = {
  logo: [],
  welcomeMessages: [],
  optionBotMessages: [],
  botConversationalMessages: [],
};

export const chatbotMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LOGO:
      return {
        ...state,
        logo: action.payload,
      };
    case actions.GETTING_FIRST_TREE_WELCOME_MESSAGES:
      return {
        ...state,
        welcomeMessages: action.payload,

      };

    case actions.GETTING_FIRST_NODE_OPTIONS:
      return {
        ...state,
        optionBotMessages: [...state.optionBotMessages, ...action.payload],
        currentBotRes:action.payload
      };

    case actions.GETTING_NODE_OPTIONS:
      return {
        ...state,
        botConversationalMessages: [
          ...state.botConversationalMessages,
          ...action.payload,
        ],
      };

    case actions.SEND_APPLICANT_DETAILS:
      return {
        ...state,
        applicantInfomation: action.payload,
      };

    case actions.RESET_STATE:
      return {
        ...state,
        welcomeMessages: action.payload || state,
        optionBotMessages: action.payload,
      };

    case actions.RESET_INITIAL_NODES:
      return {
        ...state,
        optionBotMessages: action.payload,
      };

    default:
      return state;
  }
};
