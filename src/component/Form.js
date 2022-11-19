import React, { useState } from "react";
import "./Form.css";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { SearchProperty, SearchPropertyByPlace } from "../API";
import "react-dates";

const Form = (props) => {
  const [location, setLocation] = useState([]);
  const [checkin, setCheckin] = useState([]);
  const [checkout, setCheckout] = useState([]);
  const [guests, setGuests] = useState([]);
  const navigate = useNavigate();
  let placeId = "";

  const getPlaceId = async () => {
    placeId = await SearchProperty(location);
  };

  const getProperties = async () => {
    const propertyList = await SearchPropertyByPlace(
      placeId,
      checkin,
      checkout,
      guests
    );

    props.updateResultList(propertyList);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(checkin, checkout, guests)
    props.updateFormData(checkin, checkout, guests);

    getPlaceId();
    setTimeout(() => {
      getProperties();

      navigate("/results");
    }, 1500);

    let dateOne = new Date(document.querySelector(".checkin").value);
    let dateTwo = new Date(document.querySelector(".checkout").value);

    var diffDays =
      Math.round(dateTwo.getTime() - dateOne.getTime()) / (1000 * 60 * 60 * 24);

    props.diffDays(diffDays);
    console.log(props.diffDays);
  };

  return (
    <div className="form-container">
      <div className="form">
        <div className="form-header">
          <h1>Welcome to Quickbnb</h1>
          Enter your Airbnb preferences below and click Search to see your
          future stay!
        </div>
        <form onSubmit={submitHandler} className="form-box">
          <div className="form-field">
            <label>Location</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              className="form-input"
              name="Location"
              required={true}
              placeholder="Smallville, USA"
            />
          </div>
          <div className="form-field">
            <label>Check In</label>
            <input
              type="text"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
              className="form-input checkin"
              name="Check In"
              required={true}
              placeholder="MM/DD/YYYY"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </div>
          <div className="form-field">
            <label>Check Out</label>
            <input
              value={checkout}
              type="text"
              onChange={(e) => setCheckout(e.target.value)}
              className="form-input checkout"
              name="Check Out"
              required={true}
              placeholder="MM/DD/YYYY"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
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
              required={true}
              min="1"
            />
          </div>
          <Button type="submit" className="search-btn">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
