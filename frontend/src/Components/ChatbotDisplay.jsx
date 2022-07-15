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
    <div>
      <div className="chatBotHeader">
<input className="" value="Reset" />
<h1>chat-bot</h1>
<input className="" value="Speak to a Agent" />
      </div>
      <div className="chatbotBody">
        <div className="logo">
          <img src={logo} alt="tcgLogo" />
        </div>

        <div>
          {introTreeMessages &&
            introTreeMessages
              .map((item) => {
                return (

                  <div className="introMessage">
                    <p>{item.text}</p>
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
                    <div style={{ padding: ".5rem" }}>
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
        <div>
          {nextNodes !== undefined
            ? nextNodes &&
              nextNodes.map((item, i) => {
                return (
                  <div style={{ padding: ".5rem" }}>
                    {item.text ? (
                      <p>{item.text}</p>
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
                    )}
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
