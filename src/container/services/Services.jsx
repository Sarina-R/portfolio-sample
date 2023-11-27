import React from "react";
import "./_services.scss";
import SerData from "./services-data/SerData";
import data from "./data";
const Services = () => {
  return (
    <section className="servicese ">
      <div className="contianer comp">
        <div className="text-center row title">
          <h4 className="lead fw-bold ">Our Services</h4>
          <div className="heading-line mb-5"></div>
        </div>
        <div className="text-center container row servicese__text">
          <div className="col-md-6 ">
            <h4 className="fw-bold text-capitalize">
              our servives range from initial designe to deployment anywher
              anytime
            </h4>
          </div>
          <div className="col-md-6 border-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus illum non veritatis cum? Consequuntur debitis sapiente
              iste neque repellat exercitationem quibusdam, beatae temporibus,
              ratione cum quia dolorum sit expedita minus Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      {data.map((data) => (
        <SerData
          {...data}
          img={data.img}
          title={data.title}
          key={data.id}
          text={data.text}
          className={data.class}
          icon={data.icon}
        />
      ))}
    </section>
  );
};

export default Services;
