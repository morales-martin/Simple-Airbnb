import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import "./ListItems.css";
import Card from "../ui/Card";
import ShareModal from "./ShareModal";

const ListItems = (props) => {
  const [sort, setSort] = useState();
  const [showModal, setShowModal] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  let apiData = props.airbnbList;

  useEffect(() => {
    setResults(apiData);
  }, [apiData]);

  useEffect(() => {
    let currResults = [...results];

    if (sort === "price_ascending") {
      currResults.sort(
        (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
      );
    } else if (sort === "price_descending") {
      currResults.sort(
        (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
      );
    } else {
      currResults = [...apiData];
    }

    setResults(currResults);
  }, [sort]);

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const shareHandler = (e) => {
    setSelectedItems(results.slice(0, 11));
    setShowModal(true);
  };

  const backSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <div className="navbar">
        <Button className="results__btn" onClick={backSubmitHandler}>
          Back to Search
        </Button>
        <div className="navbar-right">
          <div className="navbar_sort__container">
            <Button className="link results__btn">Sort</Button>
            <div className="navbar__sort_menu">
              <Button
                className="results__btn"
                value="price_ascending"
                onClick={sortHandler}
              >
                Price Ascending
              </Button>
              <Button
                className="results__btn"
                value="price_descending"
                onClick={sortHandler}
              >
                Price Descending
              </Button>
            </div>
          </div>
          <Button className="results__btn" onClick={shareHandler}>
            Share
          </Button>
        </div>
      </div>
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
