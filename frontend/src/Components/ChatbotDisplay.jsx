import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {JsonForm} from './jsonForm'
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
  console.log('nextSubNodes', nextSubNodes)

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
    <div className="container">
      <div className="header">
<button className="reset-button">Reset</button>
<h1 style={{color: "white", fontSize: "2rem"}}>chat-bot!</h1>
<button className="speak-to-an-agent">Speak to an agent</button>
      </div>
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
              // return (
                if(item.text){
                 return  <p>{item.text}</p>
                } else if (item.option){
                  return <button onClick={() => handleNodeOptions(item.id)}>
                         {item.option}
                      </button>
                }else if (item.application){
                  return <JsonForm nextSubNodes={nextSubNodes}/>
                }
            })
          : null}
      </div>
      <div>

      </div>
    </div>
    </div>
  );
}

export default ChatbotDisplay;
