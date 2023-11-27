import React from "react";
import "./_intro.scss";
import pic from "../../imgs/intro.png";
const Intro = () => {
  return (
    <section id="home" className="intro-section">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 intros">
            <h1 className="display-2">
              <span className="display-2--intro">
                hey!, I'm <span className="display-2--span">Sarina</span>
              </span>
              <span className="display-2--description lh-base">
                this is a multi-purpose responsive layout created with bootstrap
                v5 and sass. I created this website for my own learning and
                based on a tutorial video on YouTube. This website is only a
                sample work of my projects and not all of its information is
                exactly true about me.
              </span>
            </h1>
            <button type="button" className="rounded-pill btn-rounded">
              <a href="#getstart">Get In Touch</a>
              <span>
                <i className="fas fa-arrow-right icon" />
              </span>
            </button>
          </div>
          <div className="col-lg-6 intros">
            <img src={pic} alt="intro image" />
          </div>
        </div>
      </div>
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,96L34.3,96C68.6,96,137,96,206,112C274.3,128,343,160,411,154.7C480,149,549,107,617,117.3C685.7,128,754,192,823,213.3C891.4,235,960,213,1029,186.7C1097.1,160,1166,128,1234,117.3C1302.9,107,1371,117,1406,122.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Intro;
