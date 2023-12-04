import React from "react";
import "./_getstart.scss";
import Email from "./Email";

const Getstart = () => {
  return (
    <section className="getstart row" id="getstart">
      <div className="container row comp text-center">
        <h2 className="display-4 fw-bold">Get Started</h2>
        <div className="heading-line"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem quidem obcaecati numquam.
        </p>
      </div>

      <div className="row container getstart__box">
        <div className="col-lg-6 left ">
          <h2 className="fw-bold display-3">100% Satisfaction Guaranteed</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            molestias illo atque eligendi, sapiente repellat amet quod commodi
            eaque in aliquam, perspiciatis molestiae cum.
          </p>
          <div className="p-section">
            <h4 className="fw-bold">What will be the next step?</h4>
            <p className="lead">
              <i className="fas fa-check"></i>Lorem ipsum dolor sit amet.
            </p>
            <p className="lead">
              <i className="fas fa-check"></i>
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="lead">
              <i className="fas fa-check"></i>
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>

        <div className="col-lg-6 right text-center">
          <h3 className="fw-bold display-5 text-center">Conect Us</h3>
          <Email />
        </div>
      </div>
    </section>
  );
};

export default Getstart;
