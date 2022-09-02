import React, { useState } from "react";
import "./Form.css";
import Button from "../ui/Button";

const Form = () => {
  const [location, setLocation] = useState();
  const [checkin, setCheckin] = useState();
  const [checkout, setCheckout] = useState();
  const [guests, setGuests] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
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
              type="text"
              className="form-input"
              name="Location"
              placeholder="&#x1F9ED;"
            />
          </div>
          <div className="form-field">
            <label>Check In</label>
            <input type="Date" className="form-input" name="Check In" />
          </div>
          <div className="form-field">
            <label>Check Out</label>
            <input type="Date" className="form-input" name="Check Out" />
          </div>
          <div className="form-field">
            <label>Number of Guests</label>
            <input
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
