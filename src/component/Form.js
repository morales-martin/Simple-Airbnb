import React, { useState } from "react";
import "./Form.css";
import Button from "../ui/Button";
import axios from 'axios'

const Form = () => {
  const [location, setLocation] = useState();
  const [checkin, setCheckin] = useState();
  const [checkout, setCheckout] = useState();
  const [guests, setGuests] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('we are hadnling your subnmit!')

    const options = {
      method: "GET",
      url: "https://airbnb19.p.rapidapi.com/api/v1/searchDestination",
      params: { query: location },
      headers: {
        "X-RapidAPI-Key": "4c4a9de1bamsha6b3b850c8d309ep189f2bjsn27461fdd98de",
        "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <div className="form-header">
          <h1>Welcome to Quickbnb</h1>
          Enter your Airbnb preferences below and click Search to see your
          future stay!
        </div>
        <form className="form-box">
          <div className="form-field">
            <label>Location</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              className="form-input"
              name="Location"
              placeholder="&#x1F9ED;"
            />
          </div>
          <div className="form-field">
            <label>Check In</label>
            <input
              type="Date"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
              className="form-input"
              name="Check In"
            />
          </div>
          <div className="form-field">
            <label>Check Out</label>
            <input
              value={checkout}
              type="Date"
              onChange={(e) => setCheckout(e.target.value)}
              className="form-input"
              name="Check Out"
            />
          </div>
          <div className="form-field">
            <label>Number of Guests</label>
            <input
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              type="number"
              className="form-input"
              name="Number of Guests"
            />
          </div>
          <Button type="submit" onClick={submitHandler} className="search-btn">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
