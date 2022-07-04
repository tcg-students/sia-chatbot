import React, { useState, useEffect } from "react";
import ChatbotDisplay from './ChatbotDisplay'
import { useDispatch  } from "react-redux";
import { getInitialTreeText , getInitialNode , getNode , getLogo } from "../Redux/ActionCreators/index";
const Chatbot = () => {

  let dispatch = useDispatch();
  useEffect(() => {
    getImage();
    handleInitialNodeOptions();
  }, []);

  const getImage = _ => {
    dispatch(getLogo());
    getWelcomeContents()
  }

  const getWelcomeContents = async _ => {
    try {

      dispatch(getInitialTreeText());
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInitialNodeOptions = async (id) => {
    // console.log('id', id)
    try {
      dispatch(getInitialNode(id))
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleNodeOptions = async (id) => {
    // console.log('id', id)
    try {
      dispatch(getNode(id))
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <ChatbotDisplay handleInitialNodeOptions={handleInitialNodeOptions} handleNodeOptions={handleNodeOptions}/>
    </div>
  );
};

export default Chatbot;
