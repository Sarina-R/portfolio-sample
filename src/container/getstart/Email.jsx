import React, { useRef, useState } from "react";
import "./email.scss";
import emailjs from "@emailjs/browser";
import PopUp from "./PopUp";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_Sarina",
        "template_djta3qi",
        form.current,
        "hFRmq2fQNVXw1wOjr"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // Create a state variable to control the visibility of the PopUp component
  const [showPopUp, setShowPopUp] = useState(false);

  // Create a function to toggle the state variable when the input element is clicked
  const handlePopUp = () => {
    setShowPopUp(!showPopUp);
    // Add a timer function that will set the showPopUp state variable to false after 5 seconds
    setTimeout(() => {
      setShowPopUp(false);
    }, 3500);
  };
  return (
    <div className="container row email">
      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="name input-box">
          <input placeholder="Name" type="text" name="user_name" />
          <label>Name</label>
        </div>
        <div className="email input-box">
          <input placeholder="Email" type="email" name="user_email" />
          <label>Email</label>
        </div>
        <div>
          <div className="message input-box">
            <textarea placeholder="Message" name="message" />
            <label className="lable">Message</label>
          </div>
        </div>
        <div className="send text-center">
          <i className="fa fa-envelope-open-o"></i>
          <input type="submit" value="Send" onClick={handlePopUp} />
        </div>
      </form>

      {/* Render the PopUp component conditionally based on the state variable */}
      {showPopUp && <PopUp />}
    </div>
  );
};

export default Email;
