import React from "react";
import { GenericForm } from "./GenericForm";
import ConfirmDetails from "./ConfirmDetails";

function EditForm(props) {
  const { editForm, displayApplicantInfomation } = props;

  return (
    <div>
      {editForm && displayApplicantInfomation.length > 0 ? (
        <GenericForm {...props} />
      ) : (
        <ConfirmDetails {...props} />
      )}
    </div>
  );
}

export default EditForm;
