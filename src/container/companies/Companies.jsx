import React from "react";
import "./_companies.scss";
import c2 from "../../imgs/companies/campany-2.png";
import c1 from "../../imgs/companies/campany-1.png";
import c3 from "../../imgs/companies/campany-3.png";
import c4 from "../../imgs/companies/campany-4.png";
import c5 from "../../imgs/companies/campany-5.png";
import c6 from "../../imgs/companies/campany-6.png";
const Companies = () => {
  return (
    <section className="comp">
      <div id="" className="container">
        <div className="row text-center">
          <h4 className="fw-bold lead mt-2 ">Trusted by companies like</h4>
          <div className="heading-line mb-5"></div>
        </div>
      </div>

      <div className="container brands">
        <div className="row">
          <div className="col-4 col-lg-2">
            <div className="brands__logo">
              <img src={c1} alt="company 1 logo" className="img-fluid" />
            </div>
          </div>
          <div className="col-4 col-lg-2">
            <div className="brands__logo">
              <img src={c2} alt="company 2 logo" className="img-fluid" />
            </div>
          </div>
          <div className="col-4 col-lg-2">
            <div className="brands__logo">
              <img src={c3} alt="company 3 logo" className="img-fluid" />
            </div>
          </div>
          <div className="col-4 col-lg-2">
            <div className="brands__logo">
              <img src={c4} alt="company 4 logo" className="img-fluid" />
            </div>
          </div>
          <div className="col-4 col-lg-2">
            <div className="brands__logo">
              <img src={c5} alt="company 5 logo" className="img-fluid" />
            </div>
          </div>
          <div className="col-4 col-lg-2">
            <div className="brands__logo">
              <img src={c6} alt="company 6 logo" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
