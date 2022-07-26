import React, { useState, useEffect } from "react";
import ChatbotDisplay from "./ChatbotDisplay";
import { useDispatch, useSelector } from "react-redux";
import {
  getInitialTreeText,
  getInitialNode,
  getLogo,
  getApplicationFormValues,
  resetStateValues,
  resetInitialNodes,
  removeLastNodes,
  getInitialNode2
} from "../Redux/ActionCreators/index";
const Chatbot = (props) => {
  const [selected, setSelected] = useState({});
  const [applicationForm, setApplicationForm] = useState({});
  const [chatbotNodes, setChatbotNodes] = useState([]);
  const [formStructure, setFormStructure] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [disableOptions, setDisableOptions] = useState(false);
  const [compareNode , setCompareNode] = useState([]);
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

  let stateId = useSelector(state => state.botConversation.id)

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
    console.log('stateId ', stateId,id )
    dispatch(getInitialNode2(id))
    if (stateId === id.nodeid){
      return
    }
    if(id.treeid){
  
  }
    if(id.nodeid){
      console.log("nextNodes" ,id ,  compareNode)
      for(var i in  compareNode){
        if(compareNode[i].id === id.nodeid){
          console.log("match")
          dispatch(removeLastNodes())
        }
      }
      setCompareNode(nextNodes)
    }
    try {
      setTimeout(function () {
        dispatch(getInitialNode(id));
      }, 1000);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleOptionsIndex = (field, id) => {
    console.log("field,id", field, id);
    let newSelectedId = { ...selected };
    newSelectedId[`${field}`] = id;
    setSelected(newSelectedId);
  };

  const nodeDisplay = (_) => {
    setChatbotNodes(nextNodes);
  };

  const jsonForm = nextNodes.filter(item => item.id !== 0);
  var object = jsonForm && jsonForm[jsonForm.length - 1];

  const createForm = (_) => {
    var values = [];
    // console.log("log" , jsonForm)
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
      console.log("applicationForm", applicationForm);
      setTimeout(function () {
        setapplicationFormAndApplicantInfoShow(true);
      }, 1000);
    }
  };

  const sendFormValues = (_) => {
    // dispatch(getApplicationFormValues(applicationForm));
    if ("The kind of support you’d like to offer (Optiona)" in applicationForm){
console.log('yes')
    }else if("The kind of training or mentorship you’re able to offer (Optional)" in applicationForm){
      console.log('mentor')

    }

    setTimeout(function () {
      // dispatch(getInitialNode({ nodeid: 100 }));
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
