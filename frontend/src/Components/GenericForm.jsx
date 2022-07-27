import React from "react";
import { useEffect } from "react";

export const GenericForm = (props) => {
  const { createForm, formStructure, handleChange, handleSubmit , applicationForm} = props;

  useEffect(() => {
    createForm();
  }, []);

  return (
    <div>
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
                      value={applicationForm[item.name] !== undefined?applicationForm[item.name] : ""}
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
                      value={applicationForm[item.name] !== undefined?applicationForm[item.name] : ""}
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
    </div>
  );
};
