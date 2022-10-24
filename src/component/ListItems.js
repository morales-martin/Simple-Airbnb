import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import "./ListItems.css";

const ListItems = (props) => {
  const [sort, setSort] = useState();
  const [results, setResults] = useState([]);
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
              <Button className="results__btn" value="price_ascending" onClick={sortHandler}>
                Price Ascending
              </Button>
              <Button className="results__btn" value="price_descending" onClick={sortHandler}>
                Price Descending
              </Button>
            </div>
          </div>
          <Button className="results__btn" onClick={backSubmitHandler}>
            Share
          </Button>
        </div>
      </div>
      {results.map((airbnb) => {
        return <h1 key={airbnb.id}>{parseFloat(airbnb.price.slice(1))}</h1>;
      })}
    </div>
  );
};

export default ListItems;
