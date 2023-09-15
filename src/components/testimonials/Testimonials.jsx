import React from "react";
import "./testimonials.css";
import { FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="testimonials_section">
      <div className="testimonials_container">
        <div className="testimonials_heading">
          <h3>Reviewed by People</h3>
          <h1>Client's Testimonials</h1>
          <p>
            Discover the positive impact we've made on our clients by reading
            through their testimonials. Our clients have experienced our service
            and results. And they are eager to share their positive experiences
            with you.
          </p>
        </div>

        <div className="testimonial_cards">
          <div className="testimonial_card">
            <h5>
              "We rented a car from this website and had an amazing experience!
              The booking was easy affordable."
            </h5>
            <div className="testimonial_card_bio">
              <div className="testimonial_card_person">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFblndSZeUbaKJTXoUSPh0tpT_VhOLo_UnoQ&usqp=CAU"
                  alt="person_img"
                />
                <div className="person_credentials">
                  <strong>Raman Ranjan</strong>
                  <br />
                  <span>Belgrade</span>
                </div>
              </div>

              <div className="quote_icon">
                <FaQuoteRight />
              </div>
            </div>
          </div>

          <div className="testimonial_card">
            <h5>
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental website."
            </h5>
            <div className="testimonial_card_bio">
              <div className="testimonial_card_person">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="person_img"
                />
                <div className="person_credentials">
                  <strong>Ron Rizzly</strong>
                  <br />
                  <span>Novi Sad</span>
                </div>
              </div>

              <div className="quote_icon">
                <FaQuoteRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
