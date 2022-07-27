import React, { useState, useEffect } from "react";
import ChatbotDisplay from "./ChatbotDisplay";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
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
//       state.botConversation.logo.logo &&
//       state.botConversation.logo.logo[0].image
//   );
//   let introTreeMessages = useSelector(
//     (state) => state.botConversation.welcomeMessages
//   );

  let nextNodes = useSelector(
    (state) => state.botConversation.optionBotMessages
  );

  console.log('nextNodes', nextNodes)

  let stateId = useSelector(state => state.botConversation.id)
  const MySwal = withReactContent(Swal);

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
      // console.log("nextNodes" ,id ,  compareNode)
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
      console.log("compareNode" ,  compareNode)


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
      setTimeout(function () {
        setapplicationFormAndApplicantInfoShow(true);
      }, 1000);
    }
  };
  // console.log('setDisplayApplicantInfomation', displayApplicantInfomation)
  
  const sendFormValues = (_) => {
    dispatch(getApplicationFormValues(applicationForm));
    console.log("first", applicationForm);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title:
        "Your details were submitted successfully. We’ll be in contact soon!",
      timer: 5000,
      showConfirmButton: false,
    });

    setTimeout(function () {
      dispatch(resetStateValues());
      getImage();
      handleInitialNodeOptions();
      setDisplayApplicantInfomation([]);
      setapplicationFormAndApplicantInfoShow(false)
    }, 5000);
  };

  const handleScroll = (_) => {
    var elem = document.getElementById("chatbotBodyDiv");
    elem.scrollTop = elem.scrollHeight;
  };

  const handleResetChatbot = (_) => {
    dispatch(resetStateValues());
    getImage();
    handleInitialNodeOptions();
    setDisplayApplicantInfomation([]);
    setapplicationFormAndApplicantInfoShow(false)

  };

  const handleInitialNodesReset = (_) => {
    dispatch(resetInitialNodes());
    getImage();
    handleInitialNodeOptions();
    setDisplayApplicantInfomation([]);
  };

  const nodeTextStyling = (text) => {
    let pattern = /(\d[.])/g;
    let foundMatch = pattern.test(text);
    // console.log("foundMatch", foundMatch);
    if (foundMatch) {
      // console.log("yes");
      return "p-tag-text";
    } else {
      // console.log("no");
      return "p-tag-text1";
    }

    // }
  };

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
        nodeTextStyling={nodeTextStyling}
      />
    </div>
  );
};

export default Chatbot;
