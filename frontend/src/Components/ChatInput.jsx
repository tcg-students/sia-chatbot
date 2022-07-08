import React, { useDispatch ,useSelector } from "react-redux";
import { useState } from "react";
import { getInitialNode } from "../Redux/ActionCreators/index";


function ChatInput() {
  const [input, setInput] = useState();
  let introTreeMessages = useSelector(
    (state) => state.botConversation.welcomeMessages
  );
  let dispatch = useDispatch();

  const handleInput = () => {
    let selectedValue = introTreeMessages[input].id
    console.log('selectedValue', selectedValue)


    dispatch(getInitialNode(selectedValue));
  };

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="button" value="Send" onClick={handleInput} />
    </div>
  );
}

export default ChatInput;
