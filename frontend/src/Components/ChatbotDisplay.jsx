import React, {useState , useEffect} from "react";
import { useSelector } from "react-redux";

function ChatbotDisplay(props) {
  const [chatbotNodes , setChatbotNodes] = useState([])
  useEffect(() => {
    nodeDisplay();
  });
  let introTreeMessages = useSelector(
    (state) => state.botConversation.welcomeMessages
  );
  let nextNodes = useSelector(
    (state) => state.botConversation.optionBotMessages
  );
  // console.log("nextNodes", nextNodes);
  let nextSubNodes = useSelector(
    (state) => state.botConversation.botConversationalMessages
  );

  const nodeDisplay = () => { 
    
    setChatbotNodes(nextSubNodes)
    // console.log('i', i)

  // }
  }

  console.log('chatbotNodes', chatbotNodes)

  const { handleInitialNodeOptions, handleNodeOptions } = props;
  return (
    <div>
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
        {chatbotNodes !== undefined
          ? chatbotNodes &&
          chatbotNodes.map((item, i) => {
              return (
                <div key={i}>
                  {item.text ? (
                    <p>{item.text}</p>
                  ) : (
                    <button
                     onClick={() => handleNodeOptions(item.id)}
                     >
                      {item.option}
                    </button>
                  )}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default ChatbotDisplay;
