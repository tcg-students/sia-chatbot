import { useEffect, useState } from "react";
export const JsonForm = (props) => {

  const {
    createForm,
    formStructure,
    handleChange,
    handleSubmit,
    displayApplicantInfomation,
    applicationFormAndApplicantInfoShow,
    sendFormValues,
  } = props;

  useEffect(() => { 
    createForm();
  }, []);

  return (
    <div className="wrapper">
      {!applicationFormAndApplicantInfoShow && displayApplicantInfomation ? (
        <form className="form" onSubmit={handleSubmit}>
          {formStructure.map((item, key) => {
            return (
              <div key={key}>
                {item.value === "textarea" ? (
                  <div>
                    <label className="form-label noneAstericks">
                      {item.name}
                    </label>
                    <textarea
                      className="form-textarea"
                      type={item.value}
                      name={item.name}
                      placeholder="Message"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                ) : (
                  <div>
                    <label className="form-label addAstericks">
                      {item.name.charAt(0).toUpperCase() +
                        item.name
                          .slice(1)
                          .match(/([A-Z]?[^A-Z]*)/g)
                          .join(" ")}
                    </label>
                    <input
                      placeholder={`Enter your ${item.name
                        .match(/([A-Z]?[^A-Z]*)/g)
                        .slice(0, -1)
                        .join(" ")
                        .toLowerCase()}`}
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
            <button type="submit" className="form-button">Submit</button>


          </div>
        </form>
      ) : (
        <div>
          {displayApplicantInfomation !== [] &&
            displayApplicantInfomation.map((item, i) => {
              return (
                <div className="applicantInfomationContainer">
                  <div className="applicantInfomation">
                    <p>You are applying with the following infomation:</p>
                    <hr />
                    <ul key={i}>
                      {Object.keys(item).map((key) => {
                        return (

                          <li
                            className="info"
                            style={{ color: "#033333" }}
                            key={key + i}
                          >
                            {key}: {item[key]}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div style={{ color: "#033333" }}>
                    <p style={{ color: "white" }}>Would you like to edit?</p>
                    <div className="applicantInfomationButtons">

                      <input
                        type="submit"
                        className="optionButtons"
                        value="Yes"
                      />
                      <input
                        type="submit"
                        className="optionButtons"
                        onClick={sendFormValues}
                        value="No"
                      />
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
