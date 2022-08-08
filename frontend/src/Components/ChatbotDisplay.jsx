import React, { useState, useEffect } from "react";
import { FormIneractionController } from "./FormIneractionController";
import Chatinput from "./ChatInput";
import EditForm from "./EditForm.jsx";
import "../responsive.css";

const ChatbotDisplay = (props) => {
  const {
    handleInitialNodeOptions,
    logo,
    introTreeMessages,
    nextNodes,
    nodeDisplay,
    createForm,
    formStructure,
    handleEdit,
    edit,
    getFormDetails,
    handleChange,
    handleSubmit,
    displayApplicantInfomation,
    applicationFormAndApplicantInfoShow,
    sendFormValues,
    handleScroll,
    handleResetChatbot,
    handleInitialNodesReset,
    nodeTextStyling,
  } = props;

  useEffect(() => {
    nodeDisplay();
    handleScroll();
  });

  return (
    <div>
      <div className="chatBotHeaderContainer">
        <div className="chatBotHeader">
          <input
            className="headerButtons"
            onClick={handleResetChatbot}
            value="Reset"
          />

          <div style={{ display: "flex", marginTop: "auto", gap: "10px" }}>
            <img
              className="logo"
              style={{ height: "6vh" }}
              src={logo}
              alt="tcgLogo"
            />
            <h1>Sia Chatbot</h1>
          </div>
        </div>
      </div>
      <div id="chatbotBodyDiv" className="chatbotBody">
        <div>
          {introTreeMessages !== undefined &&
            introTreeMessages.map((item) => {
              return (
                <div className="introMessage">
                  <p>{item.text}</p>
                </div>
              );
            })}
        </div>

        <div className="treeOptions"></div>
        <div>
          {nextNodes !== undefined
            ? nextNodes &&
              nextNodes
                .filter((item) => item.id !== 0)
                .map((item, i) => {
                  if (item.text) {
                    return (
                      <div style={{padding:".5rem"}}>
                        <p className={nodeTextStyling(item.text)}>
                          {item.text}
                        </p>
                      </div>
                    );
                  } else if (item.image) {
                    return (
                      <div style={{padding:".5rem"}}>
                        <img src={item.image} alt="" />
                      </div>
                    );
                  } else if (item.option) {
                    return (
                      <div style={{padding:".5rem"}}>
                        <button
                          className="optionButtons"
                          onClick={() =>
                            handleInitialNodeOptions({ nodeid: item.id })
                          }
                        >
                          {item.option}
                        </button>
                      </div>
                    );
                  }
                })
            : null}
        </div>
        <div>
          {nextNodes.map((item) => {
            if (item.application !== null) {
              // console.log("item.app: ", item.application);
              return <FormIneractionController {...props} />;
            }
          })}
        </div>
      </div>

      <div className="chatbotFooter">
        <p style={{ color: "white" }}>Command:</p>
        <Chatinput
          introTreeMessages={introTreeMessages}
          nextNodes={nextNodes}
        />
      </div>
    </div>
  );
};

export default ChatbotDisplay;
