import React from "react";

function ConfirmDetails(props) {
  const { displayApplicantInfomation, sendFormValues, handleEdit } = props;
  // if (editForm === true) {
  //   var previousDetails = [...displayApplicantInfomation];
  // }
  return (
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
                <input type="submit" value="Edit" onClick={handleEdit} />
                <input type="submit" onClick={sendFormValues} value="Submit" />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ConfirmDetails;
