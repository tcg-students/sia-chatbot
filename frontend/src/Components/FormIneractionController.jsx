import React, { useEffect } from "react";
import ConfirmDetails from "./ConfirmDetails";
import EditForm from "./EditForm";
import { GenericForm } from "./GenericForm";

export const FormIneractionController = (props) => {
  const {
    createForm,
    formStructure,
    handleChange,
    handleSubmit,
    displayApplicantInfomation,
    applicationFormAndApplicantInfoShow,
    sendFormValues,
    handleEdit,
    editForm,
  } = props;

  useEffect(() => {
    createForm();
  }, []);

  return (
    <div>
      {!applicationFormAndApplicantInfoShow ? (
        <GenericForm {...props} />
      ) : (
        !editForm && <ConfirmDetails {...props} />
      )}
      {editForm && <EditForm {...props} />}
    </div>
  );
};