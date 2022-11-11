import React, {useState, useEffect} from 'react'
import Button from '../ui/Button'
import { useNavigate } from "react-router-dom";

function Toolbar(props) {
    const [sort, setSort] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        let currResults = [...props.results];
    
        if (sort === "price_ascending") {
          currResults.sort(
            (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
          );
        } else if (sort === "price_descending") {
          currResults.sort(
            (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
          );
        } else {
          currResults = [...props.originalList];
        }
    
        props.setResults(currResults);
      }, [sort]);

    const sortHandler = (e) => {
        setSort(e.target.value);
      };

      const backSubmitHandler = (e) => {
        e.preventDefault();
        navigate("/");
      };

  return (

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
      <Button className="results__btn" onClick={() => props.setShowModal(true)}>
        Share
      </Button>
    </div>
  </div>
  )
}

export default Toolbar