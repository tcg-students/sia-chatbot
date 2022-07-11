import React, { useState } from "react";
import { useEffect } from "react";

export const JsonForm = (props) => {
  const { createForm , handleChange } = props;

  useEffect(() => {
    createForm();
  }, []);

  const { formStructure } = props;
  console.log("formStructure", formStructure);
  return (
    <div>
      <form className="form">
        {formStructure.map((item) => {
          return (
            <div classname="form-input">
              <label className="form-label">{item.name}: </label>
              {item.value === "textarea" ? (
                <textarea type={item.value} name={item.name} onChange={(e)=>handleChange(e)}/>
              ) : (
                <input type={item.value} name={item.name} />
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
