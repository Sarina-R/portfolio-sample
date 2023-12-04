import React, { useState } from "react";
import "./popup.scss";
import emailP from "../../imgs/email.svg";

const PopUp = () => {
  const [popup, setPopup] = useState(true);
  const handle = () => {
    setPopup(false);
  };
  return (
    <section className={popup ? " row p-3 popup" : "none"}>
      <i class="fa fa-times" aria-hidden="true" onClick={handle}></i>
      <div className="col-4">
        <img src={emailP} className="img-fluid" />
      </div>
      <div className="col-8">
        <h3 className="fw-bold display-6">Your message hase been sent</h3>
      </div>
    </section>
  );
};

export default PopUp;
