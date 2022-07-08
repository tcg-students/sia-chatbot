import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Chatinput from './ChatInput'


const ChatbotDisplay = (props) =>{
  const [chatbotNodes, setChatbotNodes] = useState([]);

  useEffect(() => {
    nodeDisplay();
  }, []);

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
  let nextSubNodes = useSelector(
    (state) => state.botConversation.botConversationalMessages
  );

  console.log("nextSubNodes", nextSubNodes);
  const nodeDisplay = () => {
    setChatbotNodes(nextSubNodes);
  };
  
  const {
    handleInitialNodeOptions,
    handleNodeOptions,
    selected,
    handleOptionsIndex,
    handleChange,
    input,
    handleInput
  } = props;
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="tcgLogo" />
      </div>

      <div></div>
      <div className="treeOptions">
        {introTreeMessages !== undefined
          ? introTreeMessages &&
            introTreeMessages.map((item, i) => {
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
              return (
                <div
                  key={i}
                  onClick={() => handleOptionsIndex("option2", i)}
                  style={{
                    display:
                      selected.option2 !== i && selected.option2 > -1
                        ? "node"
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
      <Chatinput />
      <div>

      
      </div>
    </div>
  );
}

export default ChatbotDisplay;
