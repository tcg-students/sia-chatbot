import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { getInitialNode } from "../Redux/ActionCreators/index";

function ChatInput(props) {
  const { introTreeMessages, nextNodes } = props;
  const [input, setInput] = useState();
  let dispatch = useDispatch();

  let currentNodes = useSelector(
    (state) => state.botConversation.currentBotRes
  );

  const handleInput = () => {
    let newIntroOptions =
      currentNodes && currentNodes.length > 0
        ? currentNodes
        : introTreeMessages;

    if (newIntroOptions.find((item) => item.node_id === undefined)) {
      const searchValue = input;
      const selectedValue = newIntroOptions[searchValue].id;
        dispatch(getInitialNode({ treeid: selectedValue }));
    } else {
      const searchValue = input - 1;
      let newCurrentNodes = currentNodes.filter((item) => item.option);
      const selectedValue = newCurrentNodes[searchValue].id;
        dispatch(getInitialNode({ nodeid: selectedValue }));
    }
    setInput("");
  };

  return (
    <div className="selectInput">
      <input
        className="form-control"
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Response Command"
      />
      <input
        type="button"
        className="btn btn-dark"
        value="Send"
        onClick={handleInput}
        disabled={!input}
      />
    </div>
  );
}

export default ChatInput;