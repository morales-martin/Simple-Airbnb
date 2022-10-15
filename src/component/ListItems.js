import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import "./ListItems.css";

const ListItems = (props) => {
  const [sort, setSort] = useState();
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  let apiData = props.airbnbList;
  console.log(apiData)

  useEffect(() =>{ 
    setResults(apiData);
  },[apiData])

  const sortHandler = (e) => {
    setSort(e.target.value);
    let currResults = results
    if(sort === 'price_highest'){
      currResults.sort((a,b) => parseFloat(a.price.slice(1)) > parseFloat(b.price.slice(1)))
    }else{
      currResults.sort((a,b) => parseFloat(a.price.slice(1)) < parseFloat(b.price.slice(1)))
    }

    setResults(currResults)

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
            <label>
              Sort
              <select value={sort} onChange={sortHandler}>
                <option value="price_highest">Highest</option>
                <option value="price_lowest">Lowest</option>
              </select>
            </label>
          </div>
          <Button className="results__btn" onClick={backSubmitHandler}>
            Share
          </Button>
        </div>
      </div>
      {results.map((airbnb) => {
        return <h1 key={airbnb}>{parseFloat(airbnb.price.slice(1))}</h1>;
      })}
    </div>
  );
};

export default ListItems;
