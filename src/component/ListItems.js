import React, { useEffect, useState } from "react";
import "./ListItems.css";
import ResultGrid from "./ResultGrid";
import ShareModal from "./ShareModal";
import Toolbar from "./Toolbar";

const ListItems = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedItems, setSelectedItems] = useState(new Map());

  let originalList = props.airbnbList;

  useEffect(() => {
    setResults(originalList);
  }, [originalList]);

  let days = props.day
  console.log(results)

  return (
    <div className="list-items-container">
      <Toolbar
        results={results}
        setResults={setResults}
        setShowModal={setShowModal}
        originalList={originalList}
      />
      <ResultGrid results={results} days={days} selectedItems={selectedItems} setSelectedItems={setSelectedItems} ></ResultGrid>
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
