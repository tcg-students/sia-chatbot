import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { JsonForm } from "./jsonForm";
import Chatinput from "./ChatInput";

const ChatbotDisplay = (props) => {
  const {
    handleInitialNodeOptions,
    handleNodeOptions,
    selected,
    handleOptionsIndex,
    logo,
    introTreeMessages,
    nextNodes,
    nextSubNodes,
    nodeDisplay,
    createForm,
    formStructure,
  } = props;

  useEffect(() => {
    nodeDisplay();
  }, []);

  return (
    <div>
      <div className="logo">
        <img src={logo} alt="tcgLogo" />
      </div>

      <div>
        {introTreeMessages &&
          introTreeMessages
            .map((item) => {
              return <p>{item.text}</p>;
            })
            .slice(0, 1)}
      </div>
      <div className="treeOptions">
        {introTreeMessages !== undefined
          ? introTreeMessages &&
            introTreeMessages
              .map((item, i) => {
                return (
                  <div
                    onClick={() => handleOptionsIndex("option", i)}
                    style={{
                      display:
                        selected.option !== i && selected.option > -1
                          ? "none"
                          : "block",
                    }}
                  >
                    {console.log(selected.option)}
                    <button onClick={() => handleInitialNodeOptions(item.id)}>
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
                <div
                  onClick={() => handleOptionsIndex("option1", i)}
                  style={{
                    display:
                      selected.option1 !== i && selected.option1 > -1
                        ? "none"
                        : "block",
                  }}
                >
                  {item.text ? (
                    <p>{item.text}</p>
                  ) : (
                    <button onClick={() => handleNodeOptions(item.id)}>
                      {item.option}
                    </button>
                  )}
                </div>
              );
            })
          : null}
      </div>
      <div>
        {nextSubNodes !== undefined && nextSubNodes.length !== 1
          ? nextSubNodes &&
            nextSubNodes.map((item, i) => {
              // return (
              if (item.text) {
                return <p>{item.text}</p>;
              } else if (item.option) {
                return (
                  <button onClick={() => handleNodeOptions(item.id)}>
                    {item.option}
                  </button>
                );
              } else if (item.application) {
                return (
                  <JsonForm
                    nextSubNodes={nextSubNodes}
                    formStructure={formStructure}
                    createForm={createForm}
                  />
                );
              }
            })
          : null}
      </div>
      <div></div>
    </div>
  );
};

export default ChatbotDisplay;
