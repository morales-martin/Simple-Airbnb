import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card" key={props.index}>
      <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddCircleOutlineIcon"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
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
