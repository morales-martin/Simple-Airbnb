import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Welcome to Quickbnb</h1>
        Enter your Airbnb preferences below and click Search to see your future
        stay!
      </div>
      <form>
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
          <input
            type="Date"
            className="form-input"
            name="Check In"
            placeholder="mm/dd/yyyy"
          />
        </div>
        <div className="form-field">
          <label>Check Out</label>
          <input
            type="Date"
            className="form-input"
            name="Check Out"
            placeholder="mm/dd/yyyy"
          />
        </div>
        <div className="form-field">
          <label>Number of Guests</label>
          <input type="number" className="form-input" name="Number of Guests" />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;
