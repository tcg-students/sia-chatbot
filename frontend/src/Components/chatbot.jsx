import React, { useState, useEffect } from "react";
import axios from "axios";

const Chatbot = () => {
  const [introMessage, setIntroMessage] = useState();

  useEffect(() => {
    getWelcomeContents();
    getNodeContents()
  }, []);

  const getWelcomeContents = async () => {
    try {
      const data = await axios.get("http://localhost:4000/treeMessages");
      setIntroMessage(data.data.treeMessages);
    } catch (error) {
        console.log('error', error)
    }
  };

  

  const getNodeContents = async (id) => {
    try {
      const data = await axios.get(`http://localhost:4000/get_initial_nodes/${id}`);
      console.log('data', data)
    } catch (error) {
        console.log('error', error)
    }
  };

  
  return <div>
    {introMessage !== undefined ? introMessage && introMessage.map((item) => {
        return(<div>
<button style={{padding:"5px"}}>{item.text}</button>

        </div>)
    }): null} 
    </div>;
    
};

export default Chatbot;
