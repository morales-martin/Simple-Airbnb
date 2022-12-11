import React, { useEffect, useState } from "react";
import "./ListItems.css";
import ResultGrid from "./ResultGrid";
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

  useEffect(() => {
    let property = showModal ? "hidden" : "scroll";
    document.body.style.overflow = property;
    
  }, [showModal]);

  const selectItemHandler = (listing) => {
    setSelectedItems((prevState) => {
      return [...prevState, listing];
    });
  };

  const deselectItemHandler = (id) => {
    let newSelectedList = selectedItems.filter((item) => item.id !== id);

    setSelectedItems(newSelectedList);
  };

  let days = props.day;

  return (
    <div className="list-items-container">
      <Toolbar
        results={results}
        setResults={setResults}
        setShowModal={setShowModal}
        originalList={originalList}
      />
      <ResultGrid
        results={results}
        days={days}
        selectItemHandler={selectItemHandler}
        deselectItemHandler={deselectItemHandler}
        selectedItems={selectedItems}
        formData={props.formData}
      ></ResultGrid>
      <ShareModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedItems={selectedItems}
        selectItemHandler={selectItemHandler}
        deselectItemHandler={deselectItemHandler}
        formData={props.formData}
      />
    </div>
  );
};

export default ListItems;
