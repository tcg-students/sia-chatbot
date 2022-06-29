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
    {JSON.stringify(introMessage)}
    {introMessage !== undefined ? introMessage && introMessage.map((item) => {
        return(<div>
<p>{item.text}</p>

        </div>)
    }): null} 
    </div>;
    
};

export default Chatbot;
