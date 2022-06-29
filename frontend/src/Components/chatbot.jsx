import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInitialTreeText , getInitialNode } from "../Redux/ActionCreators/index";
const Chatbot = () => {
  const [introMessage, setIntroMessage] = useState();

  let dispatch = useDispatch();
  useEffect(() => {
    getWelcomeContents();
    getNodeContents();
  }, []);

  const getWelcomeContents = async () => {
    try {
      dispatch(getInitialTreeText());
    } catch (error) {
      console.log("error", error);
    }
  };

  const getNodeContents = async (id) => {
    try {
      dispatch(getInitialNode(id))
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      {introMessage !== undefined
        ? introMessage &&
          introMessage.map((item) => {
            return (
              <div>
                <button style={{ padding: "5px" }}>{item.text}</button>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Chatbot;
