import axios from "axios";
import * as actions from "../ActionTypes/index";

export const getInitialTreeText = () => {
  return async (dispatch) => {
    dispatch(loading(false))
    const response = await axios.get("http://localhost:4004/treeMessages");
    const getData = response.data.treeMessages;
    dispatch({
      type: actions.GETTING_FIRST_TREE_WELCOME_MESSAGES,
      payload: getData,
    });
  };
};

export const getInitialNode = (obj) => {
  return async (dispatch) => {
    dispatch(loading(false))
    const response = await axios.post(
      `http://localhost:4004/get_initial_nodes`,
      obj
    );

    console.log("response", response.data.rows)
    const getInitialNodeData = response.data.rows;
    dispatch({
      type: actions.GETTING_FIRST_NODE_OPTIONS,
      idObj: obj,
      payload: getInitialNodeData,
    });
  };
};

export const getInitialNode2 = (obj) => {
  return {
    type: "UPDATE_ID",
    payload: obj,
  };
};

export const getApplicationFormValues = (data) => {
  return async (dispatch) => {
    const response = await axios.post(`http://localhost:4004/send_email`, data);
    const getFormData = response.data;
    dispatch({ type: actions.SEND_APPLICANT_DETAILS, payload: getFormData });
  };
};

export const removeLastNodes = (id) => {
  return async (dispatch) => {
    dispatch({ type: "REMOVE_LAST_NODES", payload: id });
  };
};

export const resetStateValues = () => {
  return async (dispatch) => {
    dispatch(loading(false))
    dispatch({ type: actions.RESET_STATE, payload: [] });
  };
};

export const resetInitialNodes = () => {
  return async (dispatch) => {
    dispatch({ type: actions.RESET_INITIAL_NODES, payload: [] });
  };
};

export const loading=(status)=>{
  return (dispatch)=>{
    dispatch({type: actions.LOADING, payload: status})
  }
}