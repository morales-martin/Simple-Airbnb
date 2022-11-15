import React, { useState } from "react";
import { useEffect } from "react";
import "./Card.css";

function Card(props) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    // console.log(props.selectedItems);
    setSelected(false);
    for (let item of props.selectedItems) {
      if (item.id === props.id) setSelected(true);
    }
  }, [props.selectedItems, props.id]);

  const selectItemHandler = () => {
    if (!selected) {
      props.selectItemHandler({
        id: props.id,
        images: props.images,
        title: props.title,
        listingName: props.listingName,
        price: props.price,
        days: props.days,
        beds: props.beds,
        bathrooms: props.bathrooms,
      });
    } else {
      props.deselectItemHandler(props.id);
    }
  };

  return (
    <div className="card" key={props.index}>
      {selected ? (
        <svg viewBox="0 0 24 24" onClick={selectItemHandler}>
          <path d="M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" onClick={selectItemHandler}>
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
        </svg>
      )}

      <div className="image-container">
        <img className="card-img" src={props.images[0]} alt={props.id}></img>
      </div>
      <div className="card-description">
        <div className="black listingName"><a rel="noreferrer" target="_blank" href={`https://airbnb.com/rooms/${props.id}`}>{props.title}</a></div>
        <div className="grey">{props.listingName}</div>
        <div className="black">
          <span className="priceperNight">{props.price}</span>/night &#8226;{" "}
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
