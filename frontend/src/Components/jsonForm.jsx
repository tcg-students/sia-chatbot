import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';



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
    <div className="wrapper">
      {!applicationFormAndApplicantInfoShow ? (
        <form className="form" onSubmit={handleSubmit}>
          {formStructure.map((item, key) => {
            return (
              <div key={key}>
                {item.value === "textarea" ? (
                  <div>
                    <label className="form-label noneAstericks">{item.name}</label>
                    <textarea className="form-textarea"
                      type={item.value}
                      name={item.name}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                ) : (
                  <div>
                    <label className="form-label addAstericks">{item.name}</label>
                    <input
                      className="form-input"
                      type={item.value}
                      name={item.name}
                      onChange={(e) => handleChange(e)}
                      required

                    />
                  </div>
                )}
              </div>
            );
          })}
          <div >
            <button className="form-button">Submit</button>
          </div>
        </form>
      ) : (
        <div>
          {displayApplicantInfomation &&
            displayApplicantInfomation.map((item, i) => {
              return (
                <div>
                <div className="applicant-info">
                  <p>You are applying with the following infomation:</p>
                  <ul key={i}>
                    {Object.keys(item).map((key) => {
                      return (
                        <li className="info" key={key + i}>
                          {key}:{item[key]}
                        </li>
                      );
                    })}
                  </ul>
                  </div>
                  <div>
                    <p>Would you like to edit or submit?</p>
                    <input type="submit" value="Yes" />
                    <input type="submit" onClick={sendFormValues} value="No" />
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
