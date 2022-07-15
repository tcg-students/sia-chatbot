import React from "react";
import { GenericForm } from "./GenericForm";
import ConfirmDetails from "./ConfirmDetails";

function JsonForm(props) {
  const { editForm, displayApplicantInfomation } = props;

  return (
    <div>
      {!editForm && !displayApplicantInfomation ? (
        <GenericForm {...props} />
      ) : (
        <ConfirmDetails {...props} />
      )}
    </div>
  );
}

export default JsonForm;
