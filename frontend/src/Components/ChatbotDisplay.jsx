import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {JsonForm} from './jsonForm'

function ChatbotDisplay(props) {
  const [chatbotNodes, setChatbotNodes] = useState([]);

  useEffect(() => {
    nodeDisplay();
  }, []);

  let logo = useSelector(
    (state) =>
      state.botConversation.logo.logo &&
      state.botConversation.logo.logo[0].image
  );
  console.log('logo', logo)
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


  const { handleInitialNodeOptions, handleNodeOptions } = props;
  return (
    <div>
      <div className="logo">
      <img src={logo} alt="tcgLogo" />
      </div>
      {introTreeMessages !== undefined
        ? introTreeMessages &&
          introTreeMessages.map((item) => {
            return (
              <div>
                <button onClick={() => handleInitialNodeOptions(item.id)}>
                  {item.text}
                </button>
              </div>
            );
          })
        : null}
      <div>
        {nextNodes !== undefined
          ? nextNodes &&
            nextNodes.map((item, id) => {
              return (
                <div>
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
        {nextSubNodes !== undefined
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
                // <div key={i}>
                //   {item.text ? (
                //     <p>{item.text}</p>
                //   ) : (
                //     <button onClick={() => handleNodeOptions(item.id)}>
                //       {item.option}
                //     </button>
                //   )}
                // </div>
              // );
            })
          : null}
      </div>
      <div>
      </div>
    </div>
  );
}

export default ChatbotDisplay;
