import React from "react";
import { useSelector } from "react-redux";

function ChatbotDisplay(props) {
  let introTreeMessages = useSelector(
    (state) => state.botConversation.welcomeMessages
  );
  console.log('introTreeMessages :>> ', introTreeMessages);
    let nodes = useSelector(state => state.botConversation.optionBotMessages)
  console.log("nodes", nodes);

  const { handleInitialNodeOptions } = props;
  return (
    <div>
      {/* <p style={{ padding: "5px" }}>{introTreeMessages[0].text}</p> */}
      {introTreeMessages !== undefined
        ? introTreeMessages &&
          introTreeMessages.map((item, id) => {
            return (
              <div>
                <button
                  onClick={() => handleInitialNodeOptions(item.id)}
                  style={{ padding: "5px" }}
                >
                  {item.text}
                </button>
              </div>
            );
          })
        : null}

        {nodes !== undefined
        ? nodes &&
        nodes.map((item, id) => {
            return (
              <div>
                <p
                  onClick={() => handleInitialNodeOptions(item.id)}
                  style={{ padding: "5px" }}
                >
                  {item.text||item.option}
                </p>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default ChatbotDisplay;
