

import axios from "axios";
import * as actions from "../ActionTypes/index";

export const getLogo = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:4000/logo");
    const getData = response.data;
    dispatch({ type: actions.GET_LOGO, payload: getData });
  };
};


export const getInitialTreeText = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:4000/treeMessages");
    const getData = response.data.treeMessages;
    dispatch({ type: actions.GETTING_FIRST_TREE_WELCOME_MESSAGES, payload: getData });
  };
};

export const getInitialNode = (obj) => {
  return async (dispatch) => {
    const response = await axios.post(`http://localhost:4000/get_initial_nodes`,obj);
    const getInitialNodeData = response.data;
    // console.log("obj" , obj , " getInitialNodeData" ,  getInitialNodeData)
    dispatch({ type: actions.GETTING_FIRST_NODE_OPTIONS, idObj : obj,  payload: getInitialNodeData });
  };
};

export const getInitialNode2 = (obj) => {
  return {
type: "UPDATE_ID",
payload: obj

   };
  
};


export const getApplicationFormValues = (data) => {
  return async (dispatch) => {
    const response = await axios.post(`http://localhost:4000/send_email` , data);
    const getFormData = response.data;
    dispatch({ type: actions.SEND_APPLICANT_DETAILS, payload: getFormData });
  };
};

export const removeLastNodes = () => {
  return async (dispatch) => {
    dispatch({ type: "REMOVE_LAST_NODES", payload: [] });
  };
};

export const resetStateValues = () => {
  return async (dispatch) => {
    dispatch({ type: actions.RESET_STATE, payload: [] });
  };
};

export const resetInitialNodes = () => {
  return async (dispatch) => {
    dispatch({ type: actions.RESET_INITIAL_NODES, payload: [] });
  };
};
