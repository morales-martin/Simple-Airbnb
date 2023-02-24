import React, { useEffect, useState } from "react";
import "./Form.css";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { SearchProperty, SearchPropertyByPlace } from "../API";
import "react-dates";
import moment from "moment";

const Form = (props) => {
  const [location, setLocation] = useState([]);
  const [checkin, setCheckin] = useState([]);
  const [checkout, setCheckout] = useState([]);
  const [guests, setGuests] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  let placeId = "";

  useEffect(() => {
    setError("");
  }, [location, checkin, checkout, guests]);

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
    let error;
    const currentDate = moment().format("YYYY-MM-DD");

    if (!moment(checkin).isBefore(checkout) && checkin !== checkout) {
      error = "Please select a check-out date that is after check-in";
      setError(error);
    }
    if (checkin < currentDate) {
      error = "Please select a check-in date that is at earliest today";
      setError(error);
    }

    if (!error) {
      props.updateFormData(checkin, checkout, guests);

      props.updateFormData(checkin, checkout, guests);

      getPlaceId();
      setTimeout(() => {
        getProperties();

        navigate("/results");
      }, 1500);
    }
  };

  return (
    <div className="form-container">
      <div className="form">
        <div className="form-header">
          <h1>Welcome to Quickbnb</h1>
          Enter your Airbnb preferences below and click Search to see your
          future stay!
        </div>
        <span className="form-error">{error}</span>
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
              type="date"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
              className="form-input checkin"
              name="Check In"
              required={true}
              placeholder="MM/DD/YYYY"
            />
          </div>
          <div className="form-field">
            <label>Check Out</label>
            <input
              value={checkout}
              type="date"
              onChange={(e) => setCheckout(e.target.value)}
              className="form-input checkout"
              name="Check Out"
              required={true}
              placeholder="MM/DD/YYYY"
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
