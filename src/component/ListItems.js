import React from "react";
import ResultGrid from "../ui/ResultGrid";
import { useState } from "react";

const ListItems = (props) => {
let results = props.airbnbList;
  
  console.log(results)

  return(
    <>
    <ResultGrid results={results}></ResultGrid>
    </>
  )
};

export default ListItems;
