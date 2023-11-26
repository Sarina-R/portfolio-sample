import React from "react";
import "./_navbar.scss";
import logo from "../../imgs/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <nav className="navbar navbar-expand-lg navbar-dark menun shadow fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="services">
                  services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="testimonials">
                  testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="faq">
                  faq
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="portfolio">
                  portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="getstart">
                  contact
                </a>
              </li>
              <button type="button" className="rounded-pill btn-rounded">
                +98 9938023855
                <span>
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="lg"
                    color="white"
                    className="icon"
                  />
                </span>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
