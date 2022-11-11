import React, { useEffect, useState } from "react";
import "./ListItems.css";
import Card from "../ui/Card";
import ShareModal from "./ShareModal";
import Toolbar from "./Toolbar";

const ListItems = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  let originalList = props.airbnbList;

  useEffect(() => {
    setResults(originalList);
  }, [originalList]);

  return (
    <div className="list-items-container">
      <Toolbar
        results={results}
        setResults={setResults}
        setShowModal={setShowModal}
        originalList={originalList}
      />
      {results.map((airbnb) => {
        return <h1 key={airbnb.id}>{airbnb.listingName}</h1>;
      })}
      <ShareModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </div>
  );
};

export default ListItems;
