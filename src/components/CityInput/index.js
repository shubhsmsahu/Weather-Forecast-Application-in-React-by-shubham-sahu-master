import React from "react";
import { Form, Button } from "react-bootstrap";

const CityInput = ({ city, setCity, fechCityWeather, handleInputChange }) => {
  const [error, setError] = React.useState("");

  const handleClick = () => {
    // while logic to see is field is empty
    if (!city) {
      // alert("City is empty");
      setError("city field is empty");
    } else {
      // make api call
      fechCityWeather();
      setCity("");
    }
  };

  // console.log("city is ", city);
  return (
    <Form className="container">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        {/* TODO: make input Box read if error */}
        <Form.Control
          value={city}
          type="text"
          placeholder="Enter city"
          onChange={handleInputChange}
        />
        <p className="text-danger">{error}</p>
      </Form.Group>

      <Button variant="primary" onClick={handleClick}>
        Search
      </Button>
    </Form>
  );
};

export default CityInput;
