import React from "react";
import "react-multi-email/style.css";
import { ReactMultiEmail, isEmail } from "react-multi-email";

const MultipleEmailInput = (props) => {

  return (
    <ReactMultiEmail
      style={{
        border: "none",
        backgroundColor: "#FFFFFF",
        borderRadius: "1rem",
        padding: "1.2rem",
        margin: "2% 0 0 0",
      }}
      emails={props.emails}
      onChange={(_emails) => {
        props.setEmails(_emails);
      }}
      validateEmail={(email) => {
        return isEmail(email);
      }}
      getLabel={(email, index, removeEmail) => {
        return (
          <div data-tag key={index}>
            <div data-tag-item>{email}</div>
            <span data-tag-handle onClick={() => removeEmail(index)}>
              ×
            </span>
          </div>
        );
      }}
    />
  );
};

export default MultipleEmailInput;
