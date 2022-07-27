import React from "react";

function ConfirmDetails(props) {
  const { displayApplicantInfomation, sendFormValues, handleEdit } = props;
  return (
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
                    onClick={handleEdit}
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
  );
}

export default ConfirmDetails;
