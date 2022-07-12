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
    <div>
      {!applicationFormAndApplicantInfoShow ? (
        <Form.Group className="mb-3" onSubmit={handleSubmit}>
          {formStructure.map((item  , key) => {
            return (
              <div key={key}
              className="mb-3"              >
                <Form.Label>{item.name}: </Form.Label>
                {item.value === "textarea" ? (
                  <Form.Control as="textarea" rows={3}  
                    type={item.value}
                    name={item.name}
                    onChange={(e) => handleChange(e)}
                  />
                ) : (
                  <Form.Control 
                    type={item.value}
                    name={item.name}
                    onChange={(e) => handleChange(e)}
                  />
                )}
              </div>
            );
          })}
          <div classname="form-button">
            <Button variant="dark">Submit</Button>
          </div>
        </Form.Group>
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
