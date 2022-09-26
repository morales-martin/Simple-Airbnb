import React, { useEffect } from "react";

const ListItems = (props) => {
  let results = props.airbnbList;
  
  useEffect(() =>{console.log(results)},[results])


  return(
    <div>
      {results.map((airbnb) => {
        return <h1>{airbnb.listingName}</h1>
      })}
    </div>
  )
};

export default ListItems;
