import React, { useDispatch ,useSelector } from "react-redux";
import { useState , useEffect } from "react";
import { getInitialNode } from "../Redux/ActionCreators/index";


function ChatInput(props) {
  const {introTreeMessages}=props
  const [input, setInput] = useState();
  const [ currentnodes, setCurrentNodes ] = useState([])

  let dispatch = useDispatch();

 useEffect(() => {
  setCurrentNodes(introTreeMessages)
 },[])
 
 console.log('introTreeMessages', introTreeMessages)
 console.log('currentnodes', currentnodes)


  const handleInput = () => {
    let selectedValue = currentnodes[input].id
    console.log('selectedValue', selectedValue)
    dispatch(getInitialNode(selectedValue))
    
  };

  return (
    <div className="selectInput">
      <input
      className="form-control"
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="button" className="btn btn-dark" value="Send" onClick={handleInput} />
    </div>
  );
}

export default ChatInput;
