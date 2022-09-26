import React, { useState } from "react";
import "./Form.css";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { SearchProperty, SearchPropertyByPlace } from "../API";

const Form = (props) => {
  const [location, setLocation] = useState([]);
  const [checkin, setCheckin] = useState([]);
  const [checkout, setCheckout] = useState([]);
  const [guests, setGuests] = useState([]);
  const navigate = useNavigate();
  let placeId = ""

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
    
    // console.log("updating result list")
    props.updateResultList(propertyList);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    getPlaceId();

    setTimeout(() => {
      getProperties();
      console.log("Got airbnb results from API")
      console.log("Navigating...")
      navigate("/results");
    }, 1500);


  };

  return (
    <div className="page-container">
      <div className="form-container">
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
          <Button type="submit" className="search-btn">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
