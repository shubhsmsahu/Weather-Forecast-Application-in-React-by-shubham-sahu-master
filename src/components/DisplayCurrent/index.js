import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./current.css";

const CurrentWeather = ({ current, location }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <strong>Country</strong>
          <br />
          <p>{location.country}</p>
        </div>
        <div className="col">
          <strong>City</strong>
          <br />
          <p>{location.name}</p>
        </div>
        <div className="col">
          <strong>
            Temprature(<sup>.</sup>C)
          </strong>
          <br />
          <p>{current.temp_c}</p>
        </div>
        <div className="col">
          <strong>Condition</strong>
          {/* <br /> */}
          <p>
            {current.condition.text}
            (
            <img
              src={current.condition.icon}
              style={{
                width: "40px",
                height: "40px",
              }}
            />
            )
          </p>
        </div>
        <div className="col">
          <strong>Local-Time</strong>
          <p>{location.localtime}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
