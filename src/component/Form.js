import React, { useState } from "react";
import "./Form.css";
import Button from "../ui/Button";
import axios from "axios";
import env from "react-dotenv";

const Form = () => {
  const [location, setLocation] = useState([]);
  const [checkin, setCheckin] = useState([]);
  const [checkout, setCheckout] = useState([]);
  const [guests, setGuests] = useState([]);
  const [placeId, setPlaceId] = useState("");

  const searchPropertyByPlace = (apiPlaceId) => {
    const options = {
      method: "GET",
      url: `${env.API_URL}searchPropertyByPlace`,
      params: {
        id: apiPlaceId,
        checkin: checkin,
        checkout: checkout,
        adults: guests,
      },
      headers: {
        "X-RapidAPI-Key": env.API_KEY,
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

  const submitHandler = (e) => {
    e.preventDefault();

    const options = {
      method: "GET",
      url: `${env.API_URL}searchDestination`,
      params: { query: location },
      headers: {
        "X-RapidAPI-Key": env.API_KEY,
        "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(response => {
        setPlaceId(response.data.data[0].id);
        
        // searchPropertyByPlace(placeId);
      })
      .catch(function (error) {
        console.error(error);
      });

      console.log(placeId);
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
