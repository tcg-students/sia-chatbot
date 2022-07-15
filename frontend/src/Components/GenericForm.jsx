import React from "react";
import { useEffect } from "react";

export const GenericForm = (props) => {
  const { createForm, formStructure, handleChange, handleSubmit,applicationForm } = props;

  useEffect(() => {
    createForm();
  }, []);
  var details = applicationForm
console.log('details', details);
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        {formStructure.map((item) => {
          return (
            <div classname="form-input">
              <label className="form-label">{item.name}: </label>
              {item.value === "textarea" ? (
                <textarea
                  type={item.value}
                  name={item.name}
                  onChange={(e) => handleChange(e)}
                  value={details && details[item.name] || ""}
                />
              ) : (
                <input
                  type={item.value}
                  name={item.name}
                  onChange={(e) => handleChange(e)}
                  value={details && details[item.name] || ""}
                />
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
