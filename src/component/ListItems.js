import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import "./ListItems.css";

const ListItems = (props) => {
  const [sort, setSort] = useState();
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  let apiData = props.airbnbList;

  useEffect(() =>{ 
    setResults(apiData);
  },[apiData])

  useEffect(() =>{ 
    let currResults = [...results]

    if(sort === 'price_descending'){
      console.log("Descending price...")
      currResults.sort((a,b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)))
    }else if(sort === 'price_ascending'){
      console.log("Ascending price...")
      currResults.sort((a,b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)))
    }else{
      currResults = [...apiData]
    }

    setResults(currResults)
  },[sort])

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
          <div>
            <label className="">
              Sort
              <select value={sort} onChange={sortHandler}>
                <option value="unsorted"></option>
                <option value="price_ascending">Ascending</option>
                <option value="price_descending">Descending</option>
              </select>
            </label>
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
