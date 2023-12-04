import React from "react";
import "./_footer.scss";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className=" footer">
      <div className="row info container">
        <div className="col-lg-4  row">
          <div className="info__icon col-3">
            <i>
              <BiPhoneCall />
            </i>
          </div>
          <div className="info__text col-9">
            <h5 className="fw-bold text-white">+98 9938023855</h5>
            <p>Sa-We 9am-6pm</p>
          </div>
        </div>
        <div className="col-lg-4 row">
          <div className="info__icon col-3">
            <i>
              <IoMailOpenOutline />
            </i>
          </div>
          <div className="info__text col-9">
            <h5 className="fw-bold text-white email">
              SarinaRezanezhadfard @gmail.com
            </h5>
            <p>Online Support</p>
          </div>
        </div>
        <div className="col-lg-4 map row">
          <div className="info__icon col-3">
            <i>
              <FaMapMarkedAlt />
            </i>
          </div>
          <div className="info__text col-9">
            <h5 className="fw-bold text-white">Tehran, IR</h5>
            <p>TH 10012,IR</p>
          </div>
        </div>
      </div>
      <div className="row social text-center text-white p-3">
        <div className="col-6 ">conect with us on scial media</div>
        <div className="col-6 ">
          <i className="m-1">
            <IoLogoGithub />
          </i>
          <i className="m-1">
            <FaInstagram />
          </i>
          <i className="m-1">
            <FaTelegramPlane />
          </i>
          <i className="m-1">
            <FaLinkedinIn />
          </i>
          <i className="m-1">
            <FaXTwitter />
          </i>
        </div>
      </div>

      <div class="container links row ">
        <div className="one text-white col-lg-5 col-sm-6 col-6">
          <h5 className="fw-bold text-capitalize">company name</h5>
          <hr className="bg-white d-inline-block mb-2" />
          <ul className="list-inline">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              voluptatem.
            </p>
          </ul>
        </div>
        <div className="col-lg-1 none"></div>
        <div className="tow text-white col-lg-2 col-sm-6 col-6">
          <h5 className="fw-bold">Products</h5>
          <hr className="bg-white d-inline-block mb-2" />
          <ul className="list-inline">
            <li>Lorem ipsum</li> <li>Lorem ipsum</li> <li>Lorem ipsum</li>{" "}
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="three text-white col-lg-2 col-sm-6 col-6">
          <h5 className="fw-bold">Useful Links</h5>
          <hr className="bg-white d-inline-block mb-2" />
          <ul className="list-inline">
            <li>Lorem ipsum</li> <li>Lorem ipsum</li> <li>Lorem ipsum</li>{" "}
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="four text-white col-lg-2 col-sm-6 col-6">
          <h5 className="fw-bold">Contact</h5>
          <hr className="bg-white d-inline-block mb-2" />
          <ul className="list-inline">
            <li>Lorem ipsum</li> <li>Lorem ipsum</li> <li>Lorem ipsum</li>{" "}
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
