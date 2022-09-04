import React, { useState, useEffect } from "react";
import { FormIneractionController } from "./FormIneractionController";
import Chatinput from "./ChatInput";
import EditForm from "./EditForm.jsx";
import Loading from "./Spinner.jsx";
import "../responsive.css";

const ChatbotDisplay = (props) => {
  const {
    handleInitialNodeOptions,
    introTreeMessages,
    nextNodes,
    nodeDisplay,
    handleScroll,
    handleResetChatbot,
    nodeTextStyling,
    isLoading,
    disableButton
  } = props;

  useEffect(() => {
    nodeDisplay();
  });

  return (
    <div>
      <div className="chatBotHeaderContainer">
        <div className="chatBotHeader">
          <input
            type="button"
            className="headerButtons"
            onClick={handleResetChatbot}
            value="Reset"
            disabled={!disableButton}
          />

          <div style={{ display: "flex", marginTop: "auto", gap: "10px" }}>
            <h1>Sia Bot</h1>
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
                      <div style={{ padding: ".5rem" }}>
                        <p className={nodeTextStyling(item.text)}>
                          {item.text}
                        </p>
                      </div>
                    );
                  } else if (item.image) {
                    return (
                      <div className="mapImage" style={{ padding: ".5rem" }}>
                        <img
                          className="mapImage"
                          src={item.image}
                          alt="Map Logo"
                        />
                      </div>
                    );
                  } else if (item.option) {
                    return item.option.includes("Back to top") ||
                      item.option.includes("No") ? (
                      <div style={{ padding: ".5rem" }}>
                        <button
                          className="optionButtons"
                          onClick={() =>
                            handleResetChatbot({ nodeid: item.id })
                          }
                        >
                          {item.option}
                        </button>
                      </div>
                    ) : (
                      <div style={{ padding: ".5rem" }}>
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

          {isLoading && <Loading />}
        </div>
        <div>
          {nextNodes.map((item) => {
            if (item.application !== null) {
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
