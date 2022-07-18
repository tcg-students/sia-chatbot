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
    console.log('getData', getData)
    dispatch({ type: actions.GETTING_FIRST_TREE_WELCOME_MESSAGES, payload: getData });
  };
};

export const getInitialNode = (obj) => {
  console.log('obj', obj)
  return async (dispatch) => {
    const response = await axios.post(`http://localhost:4000/get_initial_nodes`,obj);
    const getInitialNodeData = response.data;
    console.log('getInitialNodeData', response)
    dispatch({ type: actions.GETTING_FIRST_NODE_OPTIONS, payload: getInitialNodeData });
  };
};

export const getApplicationFormValues = (data) => {
  return async (dispatch) => {
    const response = await axios.post(`http://localhost:4000/send_email` , data);
    const getFormData = response.data;
    console.log("getFormData", getFormData);
    dispatch({ type: actions.SEND_APPLICANT_DETAILS, payload: getFormData });
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




