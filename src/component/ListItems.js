import React from "react";
import Button from "../ui/Button";

const ListItems = (props) => {
  let results = props.airbnbList;

  console.log(results);

  return (
    <div>
      <div className="navbar">
        <Button className="back__btn">Back to Search</Button>
      </div>
      {results.map((airbnb) => {
        return <h1 key={airbnb}>{airbnb.listingName}</h1>;
      })}
    </div>
  );
};

export default ListItems;
