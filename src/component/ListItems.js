import React from "react";

const ListItems = (props) => {
  let results = props.airbnbList.data;
  

  return(
    <div>
      {results.map((airbnb) => {
        <h1>{airbnb.listingName}</h1>
      })}
    </div>
  )
};

export default ListItems;
