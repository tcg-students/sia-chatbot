import React, { useEffect } from "react";
import EditForm from "./EditForm.jsx";

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
    handleEdit
  } = props;

  useEffect(() => {
    nodeDisplay();
  }, []);

  const action = (e, id) => {
    handleEdit(e);
    handleNodeOptions(id);
  };

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
              if (item.text) {
                return <p>{item.text}</p>;
              } else if (item.option) {
                return (
                  <button onClick={(e) => action(e, item.id)}>
                    {item.option}
                  </button>
                );
              } else if (item.image) {
                return <img src={item.image} alt="" />;
              } else if (item.application) {
                return <EditForm {...props} />;
              }
            })
          : null}
      </div>
    </div>
  );
};

export default ChatbotDisplay;
