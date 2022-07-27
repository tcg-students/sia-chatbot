import React, { useEffect } from "react";
import { FormInteractionController } from "./FormInteractionController";
import Chatinput from "./ChatInput";

const ChatbotDisplay = (props) => {
  const {
    handleInitialNodeOptions,
    logo,
    introTreeMessages,
    nextNodes,
    nodeDisplay,
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

          <h1>chat-bot</h1>
          <input className="headerButtons" value="Speak to a Agent" disabled />
        </div>
        <div className="logoContainer">
          {logo === undefined ? null : (
            <div className="logo">
              <img src={logo} alt="tcgLogo" />
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
        <div>
          {nextNodes !== undefined
            ? nextNodes &&
              nextNodes
                .filter((item) => item.id !== 0)
                .map((item, i) => {
                  return (
                    <div style={{ padding: ".5rem" }}>
                      {item.text ? (
                        <div>
                          <p className={nodeTextStyling(item.text)}>
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
                      )}
                    </div>
                  );
                })
            : null}
        </div>
      </div>
      <div>
        {nextNodes.map((item, i) => {
          if (item.application) {
            return <FormInteractionController {...props} />;
          }
        })}
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
