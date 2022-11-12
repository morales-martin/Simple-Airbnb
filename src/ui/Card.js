import React from "react";
import "./Card.css";


function Card(props) {
  const selectItemHandler = () => {
    const selectedItemsMap = props.selectedItems
    if(!selectedItemsMap.has(props.id)){
      selectedItemsMap.set(props.id, {
        images: props.images,
        title: props.title,
        listingName: props.listingName,
        price: props.price,
        days: props.days,
        beds: props.beds,
        bathrooms: props.bathrooms
      })
    }
    props.setSelectedItems(selectedItemsMap)
  }


  return (
    <div onClick={selectItemHandler} className="card" key={props.index}>
      <svg viewBox="0 0 24 24" ><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
      <div className="image-container">
        <img
          className="card-img"
          src={props.images[0]}
          alt={props.id}
        ></img>
      </div>
      <div className="card-description">
        <div className="black listingName">{props.title}</div>
        <div className="grey">{props.listingName}</div>
        <div className="black">
          <span className="priceperNight">{props.price}</span>/night
          &#8226;{" "}
          <span className="totalPrice">
            ${props.days * parseFloat(props.price.slice(1))} Total
          </span>{" "}
        </div>
        <div className="black">
          {props.beds} bed and {props.bathrooms} bathroom
        </div>
      </div>
    </div>
  );
}

export default Card;
