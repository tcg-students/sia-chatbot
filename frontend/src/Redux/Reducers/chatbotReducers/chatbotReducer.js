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
        optionBotMessages: action.payload,
      };

    case actions.GETTING_NODE_OPTIONS:
      return {
        ...state,
        botConversationalMessages: [...state.botConversationalMessages , ...action.payload],
      };

      case actions.SEND_APPLICANT_DETAILS:
        console.log('action.payload', action.payload)
        return {
          ...state,
          applicantInfomation: action.payload
        };


      

    default:
      return state;
  }
};
