import { useDispatch, useSelector } from "react-redux";
import React , { useState, useEffect } from "react";
import { getInitialNode } from "../Redux/ActionCreators/index";

function ChatInput(props) {

  const { introTreeMessages, nextNodes } = props;
  const [input, setInput] = useState();
  let dispatch = useDispatch();

  let currentNodes = useSelector(
    (state) => state.botConversation.currentBotRes
  );

  console.log('currentNodes', currentNodes)

  const handleInput = () => {

    let newIntroOptions = currentNodes && currentNodes.length > 0 ? currentNodes : introTreeMessages
  console.log('newIntroOptions', newIntroOptions)

      if (newIntroOptions.find(item => item.node_id === undefined)

        ) {
        // console.log(true);
        const searchValue = input;
        // console.log('searchValue', searchValue)
        const selectedValue = newIntroOptions[searchValue].id;
        // console.log('selectedValue', selectedValue)
        setTimeout(function () {
          dispatch(getInitialNode({ treeid: selectedValue }));
        }, 1000);
      } else {
        const searchValue = input - 1;
        let newCurrentNodes = currentNodes.filter((item) => item.option);
        console.log("newCurrentNodes", newCurrentNodes);
        const selectedValue = newCurrentNodes[searchValue].id;
        // console.log("selectedValue", selectedValue);
        setTimeout(function () {
          dispatch(getInitialNode({ nodeid: selectedValue }));
        }, 1000);
      }
    setInput("")
    
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
      />
    </div>
  );
}

export default ChatInput;
