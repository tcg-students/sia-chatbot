import axios from "axios";
import * as actions from "../ActionTypes/index";

export const getInitialTreeText = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:4000/treeMessages");
    const getData = response.data.treeMessages;
    console.log("getData", getData);
    dispatch({
      type: actions.GETTING_FIRST_TREE_WELCOME_MESSAGES,
      payload: getData,
    });
  };
};

export const getInitialNode = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:4000/get_initial_nodes/${2}`
    );
    const getInitialNodeData = response.data;
    console.log("getInitialNodeData", getInitialNodeData);
    dispatch({
      type: actions.GETTING_FIRST_NODE_OPTIONS,
      payload: getInitialNodeData,
    });
  };
};
