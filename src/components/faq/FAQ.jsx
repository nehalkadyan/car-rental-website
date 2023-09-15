import React from "react";
import { Accordion } from "react-bootstrap";
import "./faq.css";

const FAQ = () => {
  return (
    <div className="faq">
      <div className="accordion_section">
        <Accordion defaultActiveKey="0" className="accordion-start">
          <h2>Frequently Asked Questions</h2>
          <Accordion.Item eventKey="0" className="item first_item">
            <Accordion.Header>What do I need to rent a car?</Accordion.Header>
            <Accordion.Body>
              To book your car, all you need is a credit or debit card. When you
              pick the car up, you'll need: Your voucher / eVoucher, to show
              that you've paid for the car. The main driver's credit / debit
              card, with enough available funds for the car's deposit. Each
              driver's full, valid driving licence, which they've held for at
              least 12 months (often 24). Your passport and any other ID the car
              hire company needs to see.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="item">
            <Accordion.Header>
              How old do I have to be to rent a car?
            </Accordion.Header>
            <Accordion.Body>
              For most car rental companies, the age requirement is between 21
              and 70 years old. If you're under 25 or over 70, you might have to
              pay an additional fee.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="item">
            <Accordion.Header>
              Can I book a rental car for someone else?
            </Accordion.Header>
            <Accordion.Body>
              Yes, as long as they meet these requirements. Just fill in their
              details while you're making the reservation.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="item">
            <Accordion.Header>
              How do I find the cheapest car rental deal
            </Accordion.Header>
            <Accordion.Body>
              We work with all the major international car hire brands (and lots
              of smaller local companies) to bring you a huge choice of cars at
              the very best prices. That's how we can find you cheap car hire
              deals at over 60,000 locations worldwide. To compare prices and
              find your ideal car at an unbeatable price, just use our search
              form.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="item">
            <Accordion.Header>
              What should I look for when I'm choosing a car?
            </Accordion.Header>
            <Accordion.Body>
              Space: You'll enjoy your rental far more if you choose a car with
              plenty of room for your passengers and luggage. Fuel policy: Not
              planning on driving much? A Like for like fuel policy can save you
              a lot of money. Location: You can't beat an 'on-airport' pick-up
              for convenience, but an 'off-airport' pick-up with a shuttle bus
              can be much cheaper.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className="item">
            <Accordion.Header>
              Are all fees included in the rental price?
            </Accordion.Header>
            <Accordion.Body>
              The vast majority of our rentals include Theft Protection,
              Collision Damage Waiver (CDW), local taxes, airport surcharges and
              any road fees. You'll pay for any ‘extras' when you pick your car
              up, along with any young driver, additional driver or one-way fees
              – but we'll explain any additional costs before you book your car
              (and taking your own child seats or GPS can be an easy way to
              reduce your costs). For more details on what's included, just
              check the Ts&Cs of any car you're looking at.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="accordion_section">
        <Accordion defaultActiveKey="0" className="accordion-start">
          <h2>Additional Information</h2>
          <Accordion.Item eventKey="0" className="item first_item">
            <Accordion.Header>Related Searches</Accordion.Header>
            <Accordion.Body>
              Luxury Car Hire, Convertible Car Hire, One-way Car Hire
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="item">
            <Accordion.Header>Popular Destinations</Accordion.Header>
            <Accordion.Body>
              Los Angeles, Vienna, Paris, Amsterdam
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="item">
            <Accordion.Header>Car Rental Companies</Accordion.Header>
            <Accordion.Body>
              Avis car hire, Budget car hire, Europcar car hire, Alamo car hire,
              Dollar car hire
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
