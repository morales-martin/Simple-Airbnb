import React from "react";
import "./ResultGrid.css";
import Card from "../ui/Card";

export default function ResultGrid(props) {
  console.log(props.results)
  return (
    <div className="contain">
      {props.results.map((result, index) => {
        return (
          <Card
            key={result.id}
            images={result.images}
            id={result.id}
            title={result.title}
            listingName={result.listingName}
            price={result.price}
            days={result.days}
            beds={result.beds}
            bathrooms={result.bathrooms}
            index={index}
            // days={props.days}
            selectItemHandler={props.selectItemHandler}
            deselectItemHandler={props.deselectItemHandler}
            selectedItems={props.selectedItems}
          />
        );
      })}
    </div>
  );
}
