import React, { useState, useEffect } from "react";
import { FormIneractionController } from "./FormIneractionController";
import Chatinput from "./ChatInput";
import EditForm from "./EditForm.jsx";

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

    <div className="container">
      <div className="header">
<button className="reset-button">Reset</button>
<h1 style={{color: "white", fontSize: "2rem"}}>chat-bot!</h1>
<button className="speak-to-an-agent">Speak to an agent</button>
      </div>
      <div className="logo">
        <img src={logo} alt="tcgLogo" />
      </div>


          <div style={{ display: "flex", marginTop: "auto", gap: "10px" }}>
            <img style={{ height: "6vh" }} src={logo} alt="tcgLogo" />
            <h1>Sia Chatbot</h1>
          </div>
        </div>
        <div className="logoContainer">
          {logo === undefined ? null : (
            <div className="logo">
            </div>
          )}
        </div>
      </div>
      <div id="chatbotBodyDiv" className="chatbotBody">
        <div>
          {introTreeMessages !== undefined &&
            introTreeMessages
              .map((item) => {
                return (
                  <div className="introMessage">
                   <div className="welcome-text"> <p >{item.text}</p>
                   </div>
                  </div>
                );
              })
              .slice(0, 1)}
        </div>

        <div className="treeOptions">
          {introTreeMessages !== undefined
            ? introTreeMessages &&
              introTreeMessages
                .map((item, i) => {
                  return (

                    <div onClick={handleInitialNodesReset}>
                      <button
                        className="treeOptionButtons"
                        onClick={() =>
                          handleInitialNodeOptions({ treeid: item.id })
                        }
                      >
                        {item.text}
                      </button>
                    </div>
                  );
                })
                .splice(1)
            : null}
        </div>
        <div className="node-button-content">
          {nextNodes !== undefined
            ? nextNodes &&
              nextNodes.filter(item => item.id !== 0).map((item, i) => {
//               nextNodes.map((item, i) => {
//                 {
//                   console.log("item", i);
//                 }
                return (
                  <div>
                    {console.log(i)}
                    {item.text ? (
         
                      <div>
                        <p
                          className={nodeTextStyling(item.text)}
                        >
                          {item.text}
                        </p>
                      </div>
                    ) : (
                      item.option && (
                        <div>
                          <button
                            className="optionButtons"
                            onClick={() =>
                              handleInitialNodeOptions({ nodeid: item.id })
                            }
                          >
                            {item.option}
                          </button>
                        </div>
                      )
                  )
                }
                </div>
                );
              })
            : null}
        </div>
        <div>
          {nextNodes.map((item) => {
            if (item.application !== null) {
              // console.log("item.app: ", item.application);
              return (
                <FormIneractionController
                {...props}
                />
              );
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
    </div>
  );
};

export default ChatbotDisplay;
