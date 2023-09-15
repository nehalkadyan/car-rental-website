import React, { useState } from "react";
import "./header.css";
import {
  AiOutlineCheck,
  AiOutlineSearch,
  AiOutlineCalendar,
  AiOutlineClockCircle,
} from "react-icons/ai";

const Header = () => {
  const states = [
    {
      state: "Alabama",
      cities: [
        {
          name: "Birmingham",
        },
        {
          name: "Greenvile",
        },
        {
          name: "Phenix City",
        },
      ],
    },
    {
      state: "California",
      cities: [
        {
          name: "San Diego",
        },
        {
          name: "San Jose",
        },
      ],
    },
    {
      state: "Colorado",
      cities: [
        {
          name: "Denver",
        },
        {
          name: "Westminister",
        },
      ],
    },
    {
      state: "Florida",
      cities: [
        {
          name: "Jacksonville",
        },
        {
          name: "Miami",
        },
        {
          name: "Saint Petersburg",
        },
      ],
    },
    {
      state: "Georgia",
      cities: [
        {
          name: "Atlanta",
        },
        {
          name: "Brunswick",
        },
      ],
    },
    {
      state: "Illinois",
      cities: [
        {
          name: "Chicago",
        },
        {
          name: "springfield",
        },
      ],
    },
    {
      state: "Kentucky",
      cities: [
        {
          name: "Paris",
        },
        {
          name: "Richmond",
        },
      ],
    },
    {
      state: "Louisiana",
      cities: [
        {
          name: "New Orleans",
        },
        {
          name: "Morgan City",
        },
      ],
    },
    {
      state: "Massachusetts",
      cities: [
        {
          name: "Bedford",
        },
        {
          name: "Boston",
        },
        {
          name: "Cambridge",
        },
      ],
    },
    {
      state: "Michigan",
      cities: [
        {
          name: "Bay City",
        },
        {
          name: "Detroit",
        },
        {
          name: "Saint Joseph",
        },
      ],
    },
    {
      state: "Mississippi",
      cities: [
        {
          name: "Columbia",
        },
        {
          name: "Greenvile",
        },
        {
          name: "Oxford",
        },
      ],
    },
    {
      state: "Nevada",
      cities: [
        {
          name: "Las Vegas",
        },
        {
          name: "Virginia City",
        },
      ],
    },
    {
      state: "New Hamsphire",
      cities: [
        {
          name: "Manchester",
        },
        {
          name: "Durham",
        },
      ],
    },
    {
      state: "New Jersey",
      cities: [
        {
          name: "Cranford",
        },
        {
          name: "West New York",
        },
      ],
    },
    {
      state: "New York",
      cities: [
        {
          name: "Dunkirk",
        },
        {
          name: "Queens",
        },
      ],
    },
  ];

  const [city, setCity] = useState("Select City");
  const [state, setState] = useState("Select State");
  const [combined, setCombined] = useState([]);
  const [nowDate, setNowDate] = useState(0);

  let date = new Date();
  let currentDay = String(date.getDate()).padStart(2, "0");
  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  let currentYear = date.getFullYear();

  let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

  let today = new Date();
  let hours = String(today.getHours());
  let minutes = String(today.getMinutes());
  let seconds = String(today.getSeconds());
  let currentTime = `${hours}:${minutes}:${seconds}`;

  const changeStates = (event) => {
    setState(event.target.value);
    setCombined(states.find((ctr) => ctr.state === event.target.value).cities);
  };

  return (
    <header className="header">
      <div className="header_container">
        <span>Car Rental - Search, Compare & Save</span>
        <p>
          <AiOutlineCheck
            className="icon"
            width={50}
            style={{ color: "#fff" }}
          />
          Free cancellations on most bookings
          <AiOutlineCheck
            className="icon"
            width={50}
            style={{ color: "#fff" }}
          />
          60,000+ locations
          <AiOutlineCheck
            className="icon"
            width={50}
            style={{ color: "#fff" }}
          />
          Customer support in 40+ languages
        </p>

        <div className="options_container">
          <form className="form">
            <select className="menu" value={state} onChange={changeStates}>
              <option className="input_state">{state}</option>
              {states.map((state) => (
                <option value={state.name}>{state.state}</option>
              ))}
            </select>

            <select
              className="menu"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option>{city}</option>
              {combined.map((city) => (
                <option value={city.name}>{city.name}</option>
              ))}
            </select>
          </form>

          <div className="form_sections">
            <span>Pick-up Date</span>
            <input
              type="date"
              className="date-input"
              size={30}
              min={currentDate}
              max="2026-01-01"
              value={nowDate}
              onChange={(e) => setNowDate(e.target.value)}
            />
          </div>

          <div className="form_sections">
            <span>Pick-up time</span>
            <input type="time" name="time" size={30} min={currentTime} />
          </div>

          <div className="form_sections">
            <span>Drop-off Date</span>
            <input
              type="date"
              className="date-input"
              size={30}
              min={nowDate}
              max="2026-01-01"
            />
          </div>

          <div className="form_sections">
            <span>Drop time</span>
            <input type="time" name="time" size={30} min={currentTime} />
          </div>

          <div className="form_button">
            <button>Search</button>
          </div>
        </div>

        <div className="header_checkboxes">
          <div className="checkbox_container">
            <input type="checkbox" />
            <p>Drop car off at different location</p>
          </div>

          <div className="checkbox_container">
            <input type="checkbox" />
            <p>Driver aged between 30 - 65?</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
