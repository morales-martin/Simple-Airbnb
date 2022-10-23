import React from "react";
import ResultGrid from "../ui/ResultGrid";
import { useState } from "react";

const ListItems = (props) => {
let results = props.airbnbList;
let days = props.day
  console.log(results)

  return(
    <>
    <ResultGrid results={results} days={days} ></ResultGrid>
    </>
  )
};

export default ListItems;
