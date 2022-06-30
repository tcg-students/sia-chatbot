import React from "react";
import { useSelector } from "react-redux";

function ChatbotDisplay(props) {
  let introTreeMessages = useSelector(
    (state) => state.botConversation.welcomeMessages
  );
  let nodes = useSelector((state) => state.botConversation.optionBotMessages);
  console.log("nodes", nodes);

  const { handleInitialNodeOptions } = props;
  return (
    <div>
      <div>
      {introTreeMessages !== undefined
        ? introTreeMessages &&
          introTreeMessages.map((item) => {
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
        </div>
<div>
      {nodes !== undefined
        ? nodes &&
          nodes.map((item, id) => {
            return (
              <div>
                {item.text ? (
                  <p
                    onClick={() => handleInitialNodeOptions(item.id)}
                    style={{ padding: "5px" }}
                  >
                    {item.text}
                  </p>
                ) : (
                  <button
                    onClick={() => handleInitialNodeOptions(item.id)}
                    style={{ padding: "5px" }}
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
