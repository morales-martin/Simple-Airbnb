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
            result={result}
            index={index}
            days={props.days}
          />
        );
      })}
    </div>
  );
}
