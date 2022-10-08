import React from "react";
import Card from "../ui/Card";
import { useState } from "react";

const ListItems = (props) => {
let results = props.airbnbList;
  
  console.log(results)

  return(
    <div>
      {results.map((airbnb) => {
        return <Card key={airbnb.id} results={results}></Card>
      })}
    </div>
  )
};

export default ListItems;
