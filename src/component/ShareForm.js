import React, { useState } from "react";
import "./ShareForm.css";
import Button from "../ui/Button";
import MultipleEmailInput from "./MultipleEmailInput";
import emailjs from "emailjs-com";
import env from "react-dotenv";

function ShareForm(props) {
  const [emails, setEmails] = useState([]);
  const [message, setMessage] = useState(" ");

  const handleMessageInput = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = () => {
    let params = {
      email_list: emails.join(","),
      airbnb_results: props.selectedItems,
      message: message
    };

    emailjs
      .send(
        `${env.REACT_APP_SERVICE_ID}`,
        `${env.REACT_APP_TEMPLATE_ID}`,
        params,
        `${env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const shareSubmitHandler = (e) => {
    e.preventDefault();
    sendEmail();
  };
  return (
    <div className="share-form-container">
      <form className="share-form">
        <div className="share-form-field">
          <label>E-Mail Recipients</label>
          <MultipleEmailInput emails={emails} setEmails={setEmails} />
        </div>
        <div className="share-form-field">
          <label>Message</label>
          <textarea
            type="text"
            className="share-form-input message"
            name="Message"
            onChange={handleMessageInput}
          ></textarea>
        </div>
        <Button className="share-button" onClick={shareSubmitHandler}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default ShareForm;
