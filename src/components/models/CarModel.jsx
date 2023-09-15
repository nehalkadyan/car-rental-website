import React, { useState } from "react";
import "./carModel.css";

const CarModel = ({ carData }) => {
  const [variable, setVariable] = useState(carData[0]);

  return (
    <div className="model_selector_container">
      <div className="model_selector_heading">
        <h4>Vehicle Models</h4>
        <h2>Our rental fleet</h2>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip.
        </p>
      </div>

      <div className="car_data">
        <div className="model_names">
          {carData.map((item) => {
            return <div onClick={() => setVariable(item)}>{item.title}</div>;
          })}
        </div>

        <div className="car_images">
          <img width={500} src={variable.url} />
        </div>

        <table className="model_table">
          <span>{variable.perDay} / rent per day</span>
          <tr>
            <td>Model</td>
            <td>|</td>
            <td>{variable.model}</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>|</td>
            <td>{variable.mark}</td>
          </tr>{" "}
          <tr>
            <td>Year</td>
            <td>|</td>
            <td>{variable.year}</td>
          </tr>{" "}
          <tr>
            <td>Doors</td>
            <td>|</td>
            <td>{variable.doors}</td>
          </tr>{" "}
          <tr>
            <td>AC</td>
            <td>|</td>
            <td>{variable.ac}</td>
          </tr>{" "}
          <tr>
            <td>Transmission</td>
            <td>|</td>
            <td>{variable.transmission}</td>
          </tr>{" "}
          <tr>
            <td>Model</td>
            <td>|</td>
            <td>{variable.fuel}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default CarModel;
