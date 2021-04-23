import React from "react";

const DropDown = ({ handleDropDown, forecastData }) => {
  return (
    <>
      <select
        className="border border-dark pl-3 pr-2"
        onChange={handleDropDown}
      >
        {forecastData.map((dateData, index) => {
          return <option value={dateData.date}>{dateData.date}</option>;
        })}
        <hr />
        <option value="All-Dates">All-Dates</option>
      </select>
    </>
  );
};

export default DropDown;
