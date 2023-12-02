import { React, useState } from "react";
import "./_testimonials.scss";
import data from "./data";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { img, name, job, text } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <section id="testimonials" className="testi mb-5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,192L30,165.3C60,139,120,85,180,80C240,75,300,117,360,133.3C420,149,480,139,540,154.7C600,171,660,213,720,197.3C780,181,840,107,900,96C960,85,1020,139,1080,144C1140,149,1200,107,1260,80C1320,53,1380,43,1410,37.3L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>

      <div className="container row text-center text">
        <h2 className="fw-bold">Testimonials</h2>
        <div className="line"></div>
        <p>What our clients saying</p>
      </div>

      <div className="container row review">
        <div className="container row text-center review__box">
          <p className="lh-lg">
            <i class="fas fa-quote-left icon"></i>
            {text}
            <i class="fas fa-quote-right icon"></i>
          </p>
          <div className="rating p-1">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
        <div className="row text-center info">
          <div className="info__img">
            <img src={img} alt={name} className="img-fluid rounded-circle" />
          </div>
          <div className="info__text">
            <h4 className="fw-bold lead">{name}</h4>
            <p>{job}</p>
          </div>
        </div>

        <div className="col text-center button">
          <i
            className="fa fa-long-arrow-left button__prev"
            onClick={prevPerson}
          ></i>
          <i
            className="fa fa-long-arrow-right button__next"
            onClick={nextPerson}
          ></i>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,186.7C672,160,768,96,864,96C960,96,1056,160,1152,181.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Testimonials;
