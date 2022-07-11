import React, { useState, useEffect } from "react";
import ChatbotDisplay from "./ChatbotDisplay";
import { useDispatch, useSelector } from "react-redux";
import {
  getInitialTreeText,
  getInitialNode,
  getNode,
  getLogo,
} from "../Redux/ActionCreators/index";
const Chatbot = (props) => {
  const [selected, setSelected] = useState({});
  const [applicationForm, setApplicationForm] = useState();
  const [chatbotNodes, setChatbotNodes] = useState([]);
  const [formStructure, setFormStructure] = useState([]);

  let logo = useSelector(
    (state) =>
      state.botConversation.logo.logo &&
      state.botConversation.logo.logo[0].image
  );
  let introTreeMessages = useSelector(
    (state) => state.botConversation.welcomeMessages
  );

  let nextNodes = useSelector(
    (state) => state.botConversation.optionBotMessages
  );
  let nextSubNodes = useSelector(
    (state) => state.botConversation.botConversationalMessages
  );
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
    console.log("id", id, "field", field);
    let newSelectedId = { ...selected };
    newSelectedId[`${field}`] = id;
    setSelected(newSelectedId);
  };

  const nodeDisplay = () => {
    setChatbotNodes(nextSubNodes);
  };

  const jsonForm = nextSubNodes;
  var object = jsonForm && jsonForm[jsonForm.length - 1];

  const createForm = () => {
    var values = [];
    if (object) {
      for (var i in object.application) {
        console.log("jsonForm", JSON.stringify(i));
        values.push({ name: i, value: object.application[i] });
      }
    }
    setFormStructure(values);
  };

  return (
    <div>
      <ChatbotDisplay
        logo={logo}
        introTreeMessages={introTreeMessages}
        nextNodes={nextNodes}
        nodeDisplay={nodeDisplay}
        handleInitialNodeOptions={handleInitialNodeOptions}
        handleNodeOptions={handleNodeOptions}
        selected={selected}
        handleOptionsIndex={handleOptionsIndex}
        nextSubNodes={nextSubNodes}
        createForm={createForm}
        formStructure={formStructure}
      />
    </div>
  );
};

export default Chatbot;
