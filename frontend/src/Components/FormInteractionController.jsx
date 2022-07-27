import React, {  useEffect } from "react";
import ConfirmDetails from "./ConfirmDetails";
import EditForm from "./EditForm";
import { GenericForm } from "./GenericForm";

export const FormInteractionController = (props) => {
  const {
    createForm,
    applicationFormAndApplicantInfoShow,
    editForm,
  } = props;

  useEffect(() => {
    createForm();
  }, []);

  return (
    <div className="wrapper">
      {!applicationFormAndApplicantInfoShow ? (
        <GenericForm {...props} />
      ) : (
        <div>{!editForm && <ConfirmDetails {...props} />}</div>
      )}
      {editForm && <EditForm {...props} />}
    </div>
  );
};
