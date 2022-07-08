import React, { useState, useEffect } from "react";
import ChatbotDisplay from "./ChatbotDisplay";
import { useDispatch } from "react-redux";
import {
  getInitialTreeText,
  getInitialNode,
  getNode,
  getLogo,
} from "../Redux/ActionCreators/index";
const Chatbot = () => {
  const [selected, setSelected] = useState({});

  let dispatch = useDispatch();
  useEffect(() => {
    getImage();
    handleInitialNodeOptions();
  }, []);

  const getImage = (_) => {
    setTimeout(function () {
      dispatch(getLogo());
    }, 500);
    getWelcomeContents();
  };

  const getWelcomeContents = async (_) => {
    try {
      setTimeout(function () {
        dispatch(getInitialTreeText());
      }, 1000);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInitialNodeOptions = async (id) => {
    console.log("id", id);
    try {
      setTimeout(function () {
        dispatch(getInitialNode(id));
      }, 1000);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleNodeOptions = async (id) => {
    console.log("id", id);
    try {
      setTimeout(function () {
        dispatch(getNode(id));
      }, 1000);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleOptionsIndex = (field, id) => {
    console.log('id', id , "field", field)
    let newSelectedId = { ...selected };
    newSelectedId[`${field}`] = id;
    setSelected(newSelectedId);
  };

  return (
    <div>
      <ChatbotDisplay
        handleInitialNodeOptions={handleInitialNodeOptions}
        handleNodeOptions={handleNodeOptions}
        selected={selected}
        handleOptionsIndex={handleOptionsIndex}

      />
    </div>
  );
};

export default Chatbot;
