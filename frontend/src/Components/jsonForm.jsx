import React, { useState } from "react";
import { useEffect } from "react";

export const JsonForm = (props) => {
  const { createForm , formStructure, handleChange , handleSubmit , displayApplicantInfomation} = props;
  
  useEffect(() => {
    createForm();
  }, []);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        {formStructure.map((item) => {
          return (
            <div classname="form-input">
              <label className="form-label">{item.name}: </label>
              {item.value === "textarea" ? (
                <textarea type={item.value} name={item.name}  onChange={(e)=>handleChange(e)}/>
              ) : (
                <input type={item.value} name={item.name}  onChange={(e)=>handleChange(e)}/>
              )}
            </div>
          );
        })}
        <div classname="form-button">
          <button>Submit</button>
        </div>
      </form>

    </div>
  );
};
