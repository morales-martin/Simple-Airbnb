import React from "react";

const ListItems = (props) => {
  let results = props.airbnbList;
  
  console.log(results)

  return(
    <div>
      {results.map((airbnb) => {
        return <h1>{airbnb.listingName}</h1>
      })}
    </div>
  )
};

export default ListItems;
