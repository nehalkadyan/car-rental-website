import React from "react";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_section">
          <div className="footer_logo">
            <span className="large_font">Rentalcars</span>
            <span className="small_font">.com</span>
          </div>
          <p className="footer_para">
            We offer a big range of vehicles for all your driving needs. We have
            the perfect car to meet your needs.
          </p>
          <IoIosCall /> <strong>(123)-456-789</strong>
          <br />
          <CiMail /> <strong>rentalcars@gmail.com</strong>
        </div>

        <div className="footer_section">
          <div className="footer_logo">
            <h4 className="company_footer">COMPANY</h4>
          </div>
          <ul>
            <li>New York</li>
            <li>Careers</li>
            <li>Mobile</li>
            <li>Blog</li>
            <li>How we work</li>
          </ul>
        </div>

        <div className="footer_section">
          <div className="footer_logo">
            <h4 className="working_footer">WORKING HOURS</h4>
          </div>
          <ul>
            <li>Mon - Fri 9:00AM - 9:00PM</li>
            <li>Sat 9:00AM - 19:00PM</li>
            <li>Sun Closed</li>
          </ul>
        </div>

        <div className="footer_section">
          <div className="footer_logo">
            <h4>SUBSCRIPTION</h4>
          </div>
          <p>
            <strong>
              Subscribe your Email address for latest news & updates.
            </strong>
          </p>
          <input type="email" placeholder="Enter Email Address" />
          <br />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
