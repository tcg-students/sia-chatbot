import { useEffect , useState } from "react";
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

  const disableInput = _ => {

  }

  useEffect(() => {
    createForm();
  }, []);

  return (
    <div>
      {!applicationFormAndApplicantInfoShow ? (
        <Form.Group className="mb-3" >
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
            <Button onClick={handleSubmit}variant="dark">Submit</Button>
          </div>
        </Form.Group>
      ) : (
        <div>
          {displayApplicantInfomation &&
            displayApplicantInfomation.map((item, i) => {
              return (
                <div className="applicantInfomationContainer">
                  <div className="applicantInfomation">
                  <p>You are applying with the following infomation:</p>
                  <hr/>
                  <ul key={i}>
                    {Object.keys(item).map((key) => {
                      return (
                        <li key={key + i}>
                          {key}:{item[key]}
                        </li>
                      );
                    })}
                  </ul>
                  </div>
                  <div style={{color:"white"}}>
                    <p>Would you like to edit or submit?</p>
                    <div className="applicantInfomationButtons">
                    <input type="submit" className="optionButtons" value="Yes" />
                    <input type="submit" className="optionButtons" onClick={sendFormValues}  value="No" />
                  </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
