import React from "react";
import "./App.css";
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let APT_KEY = "cd9302366014401490f121004212204";
  const [city, setCity] = React.useState("");
  const [cityWeather, setCityWeather] = React.useState({});
  const [print, setPrint] = React.useState(false);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };
  const fechCityWeather = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${APT_KEY}&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log("result is result", result);
        setCityWeather(result);
        // console.log(city);
        setPrint(true);
      });
  };
  return (
    <div className="container">
      <CityInput
        city={city}
        setCity={setCity}
        fechCityWeather={fechCityWeather}
        handleInputChange={handleInputChange}
      />
      {/* use city weather data to show it  on the screen */}
      <CityWeather cityWeather={cityWeather} print={print} />
    </div>
  );
}

export default App;
