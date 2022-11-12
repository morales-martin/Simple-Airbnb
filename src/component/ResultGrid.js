import React from "react";
import "./ResultGrid.css";
import Card from "../ui/Card";

export default function ResultGrid(props) {
  let results = props.results;

  return (
    <div className="contain">
      {results.map((result, index) => {
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
            selectedItems={props.selectedItems}
            setSelectedItems={props.setSelectedItems}
          />
        );
      })}
    </div>
  );
}
