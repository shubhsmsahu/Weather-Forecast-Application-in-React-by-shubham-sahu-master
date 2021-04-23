import React from "react";
import { Container } from "react-bootstrap";
import DisplayCurrent from "../DisplayCurrent/index";
import Details from "../details/index";
import DatesWeather from "../DatesWeather/index";

const CityWeather = ({ cityWeather: { current, location }, print }) => {
  return (
    <>
      {print ? (
        <>
          <DisplayCurrent current={current} location={location} />
          <DatesWeather cityName={location.name} />
        </>
      ) : (
        <Details />
      )}
    </>
  );
};

export default CityWeather;
