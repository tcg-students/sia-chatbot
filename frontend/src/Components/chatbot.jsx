import React, { useState, useEffect } from "react";
import ChatbotDisplay from "./ChatbotDisplay";
import { useDispatch, useSelector } from "react-redux";
import {
  getInitialTreeText,
  getInitialNode,
  // getNode,
  getLogo,
  getApplicationFormValues,
  resetStateValues,
  resetInitialNodes
} from "../Redux/ActionCreators/index";
const Chatbot = (props) => {
  const [selected, setSelected] = useState({});
  const [applicationForm, setApplicationForm] = useState({});
  const [chatbotNodes, setChatbotNodes] = useState([]);
  const [formStructure, setFormStructure] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [disableOptions, setDisableOptions] = useState(false);
  const [displayApplicantInfomation, setDisplayApplicantInfomation] = useState(
    []
    );
    
  const [
    applicationFormAndApplicantInfoShow,
    setapplicationFormAndApplicantInfoShow,
  ] = useState(false);
  
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


  let dispatch = useDispatch();
  useEffect(() => {
    getImage();
    handleInitialNodeOptions();
  }, []);
  const handleEdit = () => {
    setEditForm(!editForm);
  };
  
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
    try {
      setTimeout(function () {
        dispatch(getInitialNode(id));
      }, 1000);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleOptionsIndex = (field, id) => {
    let newSelectedId = { ...selected };
    newSelectedId[`${field}`] = id;
    setSelected(newSelectedId);
  };

  const nodeDisplay = (_) => {
    setChatbotNodes(nextNodes);
  };

  const jsonForm = nextNodes;
  var object = jsonForm && jsonForm[jsonForm.length - 1];

  const createForm = (_) => {
    var values = [];
    if (object) {
      for (var i in object.application) {
        values.push({ name: i, value: object.application[i] });
      }
    }
    setFormStructure(values);
  };

  const handleChange = (e) => {
    setApplicationForm({ ...applicationForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (applicationForm) {
      setDisplayApplicantInfomation([applicationForm]);
      setTimeout(function () {
        setapplicationFormAndApplicantInfoShow(true);
      }, 1000);
    }
  };

  const sendFormValues = (_) => {
    dispatch(getApplicationFormValues(applicationForm));

    setTimeout(function () {
      dispatch(getInitialNode({ nodeid: 100 }));
    }, 3000);
  };

  const handleScroll = _ => {
      var elem = document.getElementById("chatbotBodyDiv");
      elem.scrollTop = elem.scrollHeight;
  };

  const handleResetChatbot = _ => {
dispatch(resetStateValues())
getImage();
    handleInitialNodeOptions();
  }

  const handleInitialNodesReset= _ => {
    dispatch(resetInitialNodes())
    getImage();

    handleInitialNodeOptions()
  }
  return (
    <div>
      <ChatbotDisplay
        logo={logo}
        introTreeMessages={introTreeMessages}
        nextNodes={nextNodes}
        nodeDisplay={nodeDisplay}
        handleInitialNodeOptions={handleInitialNodeOptions}
        selected={selected}
        createForm={createForm}
        formStructure={formStructure}
        handleChange={handleChange}
        handleEdit={handleEdit}
        handleSubmit={handleSubmit}
        displayApplicantInfomation={displayApplicantInfomation}
        applicationFormAndApplicantInfoShow={
          applicationFormAndApplicantInfoShow
        }
        sendFormValues={sendFormValues}
        handleScroll={handleScroll}
        handleResetChatbot={handleResetChatbot}
        handleInitialNodesReset={handleInitialNodesReset}
      />
    </div>
  );
};

export default Chatbot;
