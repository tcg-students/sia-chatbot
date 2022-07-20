import React, { useState, useEffect } from "react";
import ChatbotDisplay from "./ChatbotDisplay";
import { useDispatch, useSelector } from "react-redux";
import {
  getInitialTreeText,
  getInitialNode,
  getNode,
  getLogo,
  getApplicationFormValues
} from "../Redux/ActionCreators/index";
const Chatbot = (props) => {
  const [selected, setSelected] = useState({});
  const [applicationForm, setApplicationForm] = useState({});
  const [chatbotNodes, setChatbotNodes] = useState([]);
  const [formStructure, setFormStructure] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [disableOptions, setDisableOptions] = useState(false);

  const [displayApplicantInfomation, setDisplayApplicantInfomation] = useState([]);
  const [applicationFormAndApplicantInfoShow, setapplicationFormAndApplicantInfoShow] = useState(false);

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
  const handleEdit = () => {
    setEditForm(!editForm);
  };

  const getImage = _ => {
    setTimeout(function () {
      dispatch(getLogo());
    }, 500);
    getWelcomeContents();
  };

  const getWelcomeContents = async _ => {
    try {
      setTimeout(function () {
        dispatch(getInitialTreeText());
      }, 1000);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInitialNodeOptions = async id => {
    try {
      setTimeout(function () {
        dispatch(getInitialNode(id));
        // setDisableOptions(true)
      }, 1000);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleNodeOptions = async id => {
    try {
      setTimeout(function () {
        dispatch(getNode(id));
      }, 1000);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleOptionsIndex = (field, id) => {
    console.log('field,id', field,id)
    let newSelectedId = { ...selected };
    newSelectedId[`${field}`] = id;
    setSelected(newSelectedId);
            setDisableOptions(true)
  };

  const nodeDisplay = _ => {
    setChatbotNodes(nextSubNodes);
  };

  const jsonForm = nextSubNodes;
  var object = jsonForm && jsonForm[jsonForm.length - 1];

  const createForm = _ => {
    var values = [];
    if (object) {
      for (var i in object.application) {
        values.push({ name: i, value: object.application[i] });
      }
    }
    setFormStructure(values);
  };

  const handleChange = e => {
    setApplicationForm({ ...applicationForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (applicationForm) {
      setDisplayApplicantInfomation([applicationForm]);
      setTimeout(function () {
        setapplicationFormAndApplicantInfoShow(true);
      }, 1000);
    }
  };

  const sendFormValues = _ => {
    dispatch(getApplicationFormValues(applicationForm))
    setTimeout(function () {
      dispatch(getNode(100));
    }, 3000);
  }

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
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        displayApplicantInfomation={displayApplicantInfomation}
        applicationFormAndApplicantInfoShow={
          applicationFormAndApplicantInfoShow
        }
        disableOptions={disableOptions}
        sendFormValues={sendFormValues}
      />
    </div>
  );
};

export default Chatbot;
