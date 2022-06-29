import React, { useState, useEffect } from "react";
import ChatbotDisplay from './ChatbotDisplay'
import { useDispatch  } from "react-redux";
import { getInitialTreeText , getInitialNode } from "../Redux/ActionCreators/index";
const Chatbot = () => {
  const [introMessage, setIntroMessage] = useState();

  let dispatch = useDispatch();
  useEffect(() => {
    getWelcomeContents();
    handleInitialNodeOptions();
  }, []);

  const getWelcomeContents = async () => {
    try {

      dispatch(getInitialTreeText());
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInitialNodeOptions = async (id) => {
    try {
      
      dispatch(getInitialNode(id))
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <ChatbotDisplay handleInitialNodeOptions={handleInitialNodeOptions} />
    </div>
  );
};

export default Chatbot;
