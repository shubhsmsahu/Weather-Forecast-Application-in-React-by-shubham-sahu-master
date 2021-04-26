import React, { useState, useEffect } from "react";
import DropDown from "./DropDown";
import Table from "./Table";
import "./dates.css";
const DatesWeather = ({ cityName }) => {
  const [date, Setdate] = useState("All-Dates");
  const [forecastData, setForecastData] = useState([]);
  const handleDropDown = (event) => {
    // console.log(event.target.value);
    Setdate(event.target.value);
  };
  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=cd9302366014401490f121004212204&q=${cityName}&days=10&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.forecast.forecastday);
        setForecastData(result.forecast.forecastday);
        // Setdate(result.forecast.forecastday[0].date);
      });
  }, []);
  return (
    <div className="container">
      <h4 className="d-inline mr-2">Select Weather According to Dates</h4>
      <DropDown handleDropDown={handleDropDown} forecastData={forecastData} />
      <Table forecastData={forecastData} date={date} />
    </div>
  );
};

export default DatesWeather;
