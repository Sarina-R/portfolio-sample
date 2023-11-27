import React from "react";
import "./_serdata.scss";

const SerData = ({ img, title, text, className, icon }) => {
  return (
    <section className="container">
      <div className="row serdata">
        <div className="col-md-6 text">
          <i className={icon}></i>
          <div>
            <h4>{title}</h4>
          </div>
          <p>{text}</p>
          <button type="button" className="rounded-pill btn-rounded">
            Learn More
            <span>
              <i className="fas fa-arrow-right icon"></i>
            </span>
          </button>
        </div>
        <div className="col-md-6">
          <img src={img} alt="services image" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default SerData;
