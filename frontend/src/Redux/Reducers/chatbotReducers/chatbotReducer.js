import * as actions from "../../ActionTypes/index";
const REMOVE_LAST_NODES = "REMOVE_LAST_NODES"
let initialState = {
  logo: [],
  nodeId: [],
  // currentNodes: [],
  welcomeMessages: [],
  optionBotMessages: [],
  id:null
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
      const newListObj = [...state.optionBotMessages,
        {
          id: 0,
          application: null,
         
        },
        ...action.payload, {
          id: 0,
          application: null,
         
        }];
  
  
        console.log("newListObj" , newListObj)
      return {
        ...state,
        optionBotMessages: [...newListObj],
        currentBotRes: action.payload
      };

      case "UPDATE_ID":
        console.log('action.obj', action.payload)
        return {
          ...state , 
          id:action.payload.nodeid ? action.payload.nodeid : action.payload.treeid
        }

    case REMOVE_LAST_NODES:
      var newList = [...state.optionBotMessages]
      var choppedList = []
        var nodeId = action.payload
        var findNodeId = state.optionBotMessages.findIndex((item) => item.id === nodeId.nodeid); 
        for(var i = findNodeId ; i < state.optionBotMessages.length ; i++){
          if(state.optionBotMessages[i] === 0){
            console.log("index index" , i)
            var choppedList = newList.splice(0, newList.length-1)
            console.log("find match " , JSON.stringify(choppedList))
            break 
          }
        }


        // console.log("findNodeId findNodeId" , findNodeId)
        // var textList = [...state.optionBotMessages]
        // var newListCopy = [...state.optionBotMessages]
        // var newListWithOutLast = newListCopy.slice(0, -1)
        // var secondLastIndex = newListWithOutLast.findLastIndex(item => item.id == 0);  
        // var choppedList = textList.splice(0, secondLastIndex + 1)

        console.log("choppedList" , choppedList)

      return {
        ...state,
        // currentNodes: [...action.payload],
        optionBotMessages: [...choppedList],
        currentBotRes: action.payload
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
      console.log('clear state', action.payload)
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
