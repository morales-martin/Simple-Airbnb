import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card" key={props.index}>
      <div className="image-container">
        <img
          className="card-img"
          src={props.result.images[0]}
          alt={props.result.id}
        ></img>
      </div>
      <div className="card-description">
        <div className="black listingName">{props.result.title}</div>
        <div className="grey">{props.result.listingName}</div>
        <div className="black">
          <span className="priceperNight">{props.result.price}</span>/night
          &#8226;{" "}
          <span className="totalPrice">
            ${props.days * parseFloat(props.result.price.slice(1))} Total
          </span>{" "}
        </div>
        <div className="black">
          {props.result.beds} bed and {props.result.bathrooms} bathroom
        </div>
      </div>
    </div>
  );
}

export default Card;
