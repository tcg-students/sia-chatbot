import React, { useState, useEffect } from "react";
import ChatbotDisplay from "./ChatbotDisplay";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  getInitialTreeText,
  getInitialNode,
  getApplicationFormValues,
  resetStateValues,
  loading,
  removeLastNodes,
  getInitialNode2,
} from "../Redux/ActionCreators/index";
const Chatbot = (props) => {
  const [applicationForm, setApplicationForm] = useState({});
  const [chatbotNodes, setChatbotNodes] = useState([]);
  const [formStructure, setFormStructure] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [compareNode, setCompareNode] = useState([]);
  const [displayApplicantInfomation, setDisplayApplicantInfomation] = useState([]);
  const [
    applicationFormAndApplicantInfoShow,
    setapplicationFormAndApplicantInfoShow,
  ] = useState(false);

  let introTreeMessages = useSelector(
    (state) => state.botConversation.welcomeMessages
  );
  let isLoading = useSelector((state)=>state.botConversation.isLoading)
  
  let nextNodes = useSelector(
    (state) => state.botConversation.optionBotMessages
  );

  let stateId = useSelector((state) => state.botConversation.id);

  const MySwal = withReactContent(Swal);

  let dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(loading(true))
      dispatch(getInitialTreeText());
      dispatch(getInitialNode({ treeid: 1 }));

    setCompareNode([]);
    };
  });

  const handleEdit = (e) => {
    e.preventDefault();

    setEditForm(!editForm);
  };

  const getImage = (_) => {
  
    getInitialContents();
  };

  const getInitialContents = async () => {
    try {
        dispatch(loading(true))
        dispatch(getInitialTreeText());
        dispatch(getInitialNode({ treeid: 1 }));

      setCompareNode([]);

      return;
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInitialNodeOptions = async (id) => {
    try {
      dispatch(loading(true))
      dispatch(getInitialNode2(id));
      if (stateId === id.nodeid) {
        return;
      }
      if (id.nodeid) {
        for (var i in compareNode) {
          if (compareNode[i].id === id.nodeid) {
            dispatch(removeLastNodes(id));
            
          }
        }
        setCompareNode(nextNodes);
      }
        dispatch(getInitialNode(id));
    } catch (error) {
      console.log("error", error);
    }
  };

  const nodeDisplay = (_) => {
    setChatbotNodes(nextNodes);
  };

  

  const jsonForm = nextNodes.filter((item) => item.id !== 0);
  var object = jsonForm && jsonForm[jsonForm.length - 1];
   console.log("obj", object)

  const createForm = (_) => {
    var values = [];
    if (object) {
      for (var i in object.application) {
        values.push({ name: i, value: object.application[i]});
        console.log('values', values)
      }
    }
    setFormStructure(values);
  };

  console.log("form", formStructure)

  const handleChange = (e) => {
    setApplicationForm({ ...applicationForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditForm(false);

    if (applicationForm) {
      setDisplayApplicantInfomation([applicationForm]);
        setapplicationFormAndApplicantInfoShow(true);
    }
  };

  const sendFormValues = (_) => {
    dispatch(getApplicationFormValues(applicationForm));
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title:
        "Your details were submitted successfully. We’ll be in contact soon!",
      timer: 5000,
      showConfirmButton: false,
    });
    setTimeout(function() {
      dispatch(resetStateValues());
      getImage();
      handleInitialNodeOptions();
      setDisplayApplicantInfomation([]);
      setapplicationFormAndApplicantInfoShow(false);
      setApplicationForm({});
    }, 1000);
  };

  const handleScroll = (_) => {
    var elem = document.getElementById("chatbotBodyDiv");
    elem.scrollTop = elem.scrollHeight;
  };

  const handleResetChatbot = (_) => {
    dispatch(loading(true))
    setTimeout(function() {
      dispatch(resetStateValues());
      getImage();
      handleInitialNodeOptions();
      setDisplayApplicantInfomation([]);
      setapplicationFormAndApplicantInfoShow(false);
      setCompareNode([]);
         }, 2000);

  };

  const nodeTextStyling = (text) => {
    let pattern = /(\d[.])/g;
    let foundMatch = pattern.test(text);


    if (foundMatch) {
      return "p-tag-text1";
    } else {
      return "p-tag-text";
    }
  };

  return (
    <div>
      <ChatbotDisplay
        introTreeMessages={introTreeMessages}
        nextNodes={nextNodes}
        nodeDisplay={nodeDisplay}
        handleInitialNodeOptions={handleInitialNodeOptions}
        createForm={createForm}
        formStructure={formStructure}
        handleChange={handleChange}
        handleEdit={handleEdit}
        handleSubmit={handleSubmit}
        displayApplicantInfomation={displayApplicantInfomation}
        applicationFormAndApplicantInfoShow={
          applicationFormAndApplicantInfoShow
        }
        isLoading={isLoading}
        sendFormValues={sendFormValues}
        handleScroll={handleScroll}
        handleResetChatbot={handleResetChatbot}
        nodeTextStyling={nodeTextStyling}
        editForm={editForm}
        applicationForm={applicationForm}
      />
    </div>
  );
};

export default Chatbot;