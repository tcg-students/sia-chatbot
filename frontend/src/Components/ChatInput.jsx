import React, { useDispatch ,useSelector } from "react-redux";
import { useState , useEffect } from "react";
import { getInitialNode } from "../Redux/ActionCreators/index";


function ChatInput(props) {
  const {introTreeMessages ,nextNodes}=props
  const [input, setInput] = useState();
  const [current , setCurrent] = useState([])
  let dispatch = useDispatch();

  let currentNodes = useSelector(
    (state) => state.botConversation.currentBotRes
  );


  
 useEffect(() => {
 },[])
 
 
 console.log('introTreeMessages', introTreeMessages)
 const handleInput = () => {
   setCurrent(introTreeMessages)
   console.log('current', current)
    try {
      if("Hi! My name is Sia. I was created by The Coding Ground class of 2021. How can I help you today?." in currentNodes){
 }
  const searchValue = input - 1 ;
  let newArr = currentNodes.filter(item=> item.option);
console.log('newArr', newArr)
const selectedValue = newArr[searchValue].id
console.log('selectedValue', selectedValue)
  setTimeout(function () {
    dispatch(getInitialNode({nodeid:selectedValue}));
  }, 1000);
} catch (error) {
  console.log("error", error);
}


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
