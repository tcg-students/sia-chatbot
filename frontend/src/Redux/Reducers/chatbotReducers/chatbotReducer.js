import * as actions from "../../ActionTypes/index";

const REMOVE_LAST_NODES = "REMOVE_LAST_NODES";
let initialState = {
  logo: [],
  nodeId: [],
  currentNodes: [],
  welcomeMessages: [],
  optionBotMessages: [],
  id: null,
  isLoading:false
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
        isLoading:true,
        welcomeMessages: action.payload,
      };

    case actions.GETTING_FIRST_NODE_OPTIONS:
      const newListObj = [
        ...state.optionBotMessages,
        {
          id: 0,
          application: null,
        },
        ...action.payload,
        {
          id: 0,
          application: null,
        },
      ];
      return {
        ...state,
        optionBotMessages: newListObj,
        currentBotRes: action.payload,
      };

    case "UPDATE_ID":
      return {
        ...state,
        id: action.payload.nodeid
          ? action.payload.nodeid
          : action.payload.treeid,
      };

    case REMOVE_LAST_NODES:
      var textList = [...state.optionBotMessages];
      var foundIndex = 0;
      var indexOfOption = 0;
      for (var i in state.optionBotMessages) {
        if (state.optionBotMessages[i].id === action.payload.nodeid) {
          foundIndex = i;
        }
      }
      for (var i = foundIndex; i < state.optionBotMessages.length; i++) {
        if (state.optionBotMessages[i].id === 0) {
          indexOfOption = i;
          break;
        }
      }

      var choppedList = textList.splice(0, indexOfOption);

      return {
        ...state,
        optionBotMessages: [...choppedList],
        currentBotRes: action.payload,
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
        nodeId: [],
        currentNodes: [],
        optionBotMessages: [],
        id: null,
      };
    case actions.LOADING:
      return{
        ...state,isLoading: action.payload
      }

    default:
      return state;
  }
};