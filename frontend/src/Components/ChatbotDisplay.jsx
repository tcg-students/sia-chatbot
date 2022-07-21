import React, { useState, useEffect } from "react";
import { JsonForm } from "./jsonForm";
import Chatinput from "./ChatInput";

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
    getFormDetails,
    handleChange,
    handleSubmit,
    displayApplicantInfomation,
    applicationFormAndApplicantInfoShow,
    sendFormValues,
    disableOptions,

  } = props;

//   var objDiv = document.getElementByClass("chatbotBody");
// objDiv.scrollTop = objDiv.scrollHeight;

  useEffect(() => {
    nodeDisplay();
  }, []);

  return (
    <div className="bot-body">
      <div className="chatBotHeader">
<input className="reset-button" value="Reset" />
<h1>chat-bot<span>&#33;</span></h1>
<input className="" value="Speak to a Agent" />
      </div>
      <div className="chatbotBody">
        {/* <div className="logo">
          <img src={logo} alt="tcgLogo" />
        </div> */}

        <div>
          {introTreeMessages &&
            introTreeMessages
              .map((item) => {
                return (

                  <div className="introMessage">
                   <div> <p className="welcome-text">{item.text}</p></div>
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
                    <div >
                      <button
                        className="optionButtons"
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
              nextNodes.map((item, i) => {
                return (
                  <div>
                    {item.text ? (
                      <div className="p-tag">
                      <p className="p-tag-text">{item.text}</p>
                      </div>
                      ) : (
                        item.option && (
                         
                        <button
                          className="optionButtons"
                          onClick={() =>
                            handleInitialNodeOptions({ nodeid: item.id })
                          }
                        >
                          {item.option}
                        </button>
                        
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
              console.log("item.app: ", item.application);
              return (

                <JsonForm
                  formStructure={formStructure}
                  createForm={createForm}
                  handleChange={handleChange}
                  getFormDetails={getFormDetails}
                  handleSubmit={handleSubmit}
                  displayApplicantInfomation={displayApplicantInfomation}
                  applicationFormAndApplicantInfoShow={
                    applicationFormAndApplicantInfoShow
                  }
                  sendFormValues={sendFormValues}
                />
              );
            }
          })}
        </div>
      </div>

      <div className="chatbotFooter">
        <Chatinput
          introTreeMessages={introTreeMessages}
          nextNodes={nextNodes}
        />
      </div>
    </div>
  );
};

export default ChatbotDisplay;
