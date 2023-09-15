import React from "react";
import "./brands.css";
import flexible from "../../assets/flexibleRentals.png";
import search from "../../assets/noHiddenFees.png";
import priceMatch from "../../assets/priceMatch.png";
import clean from "../../assets/cleanCars.png";
import offers from "../../assets/offers.png";

const Brands = () => {
  return (
    <div className="brands">
      <div className="brands_section">
        <h2>Connecting you with the biggest brands in car rental</h2>
        <div className="brand_items">
          <img
            src="https://cdn2.rcstatic.com/images/supplier_logos/greenmotion_logo_lrg.gif"
            alt="brand_img"
          />
          <img
            src="https://cdn2.rcstatic.com/images/supplier_logos/avis_logo_lrg.gif"
            alt="brand_img"
          />
          <img
            src="https://cdn2.rcstatic.com/images/supplier_logos/easirent_logo_lrg.gif"
            alt="brand_img"
          />
          <img
            src="https://cdn2.rcstatic.com/images/supplier_logos/europcar_logo_lrg.gif"
            alt="brand_img"
          />
          <img
            src="https://cdn2.rcstatic.com/images/supplier_logos/sixt_logo_lrg.gif"
            alt="brand_img"
          />
          <img
            src="https://cdn2.rcstatic.com/images/supplier_logos/alamo_logo_lrg.gif"
            alt="brand_img"
          />
          <img
            src="https://cdn2.rcstatic.com/images/supplier_logos/budget_logo_lrg.gif"
            alt="brand_img"
          />
          <img
            src="https://cdn2.rcstatic.com/images/supplier_logos/dollar_logo_lrg.gif"
            alt="brand_img"
          />
        </div>

        <div className="brand_cards">
          <div className="brand_card">
            <img src={flexible} />
            <div>
              <span>Flexible rentals</span>
              <p>
                Cancel or change most bookings for free up to 48 hours before
                pick-up
              </p>
            </div>
          </div>

          <div className="brand_card">
            <img src={search} />
            <div>
              <span>No hidden fees</span>
              <p>Know exactly what you're paying</p>
            </div>
          </div>

          <div className="brand_card">
            <img src={priceMatch} />
            <div>
              <span>Price Match Guarantee</span>
              <br />
              <p>Found the same deal for less? We'll match the price</p>
            </div>
          </div>
        </div>

        <div className="service_cards">
          <div className="service_card">
            <img src={clean} alt="service-img" />
            <div>
              <span>
                Clean cars. Flexible bookings. Socially distant rental counters
              </span>
              <br />
              <p>
                We're working with our partners to keep you safe and in the
                driving seat.
              </p>
              <button>Find out more</button>
            </div>
          </div>

          <div className="service_card">
            <img src={offers} alt="service-img" />
            <div>
              <span>Subscribe for exclusive offers and deals!</span>
              <br />
              <div>
                <input placeholder="Email Address" />
                <button className="offer_btn">Sign me up!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
