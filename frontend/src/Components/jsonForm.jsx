import React, { useState } from "react";
import { useEffect } from "react";

export const JsonForm = (props) => {
  const {
    createForm,
    formStructure,
    handleChange,
    handleSubmit,
    displayApplicantInfomation,
    applicationFormAndApplicantInfoShow,
    sendFormValues
  } = props;

  useEffect(() => {
    createForm();
  }, []);

  return (
    <div>
      {!applicationFormAndApplicantInfoShow ? (
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
                  />
                ) : (
                  <input
                    type={item.value}
                    name={item.name}
                    onChange={(e) => handleChange(e)}
                  />
                )}
              </div>
            );
          })}
          <div classname="form-button">
            <button>Submit</button>
          </div>
        </form>
      ) : (
        <div>
          {displayApplicantInfomation &&
            displayApplicantInfomation.map((item, i) => {
              return (
                <div>
                  <p>You are applying with the following infomation:</p>
                  <ul key={i}>
                    {Object.keys(item).map((key) => {
                      return (
                        <li key={key + i}>
                          {key}:{item[key]}
                        </li>
                      );
                    })}
                  </ul>
                  <div>
                    <p>Would you like to edit or submit?</p>
                    <input type="submit" value="Yes" />
                    <input type="submit" onClick={sendFormValues}  value="No" />
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
