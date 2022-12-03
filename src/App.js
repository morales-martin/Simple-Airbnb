import "./App.css";
import { useState, React } from "react";
import Form from "./component/Form";
import ListItems from "./component/ListItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [airbnbList, setAirbnbList] = useState([]);
  const [formData, setFormData] = useState({});

  const updateResultList = (data) => {
    setAirbnbList(data.data);
  };

  const updateFormData = (checkin, checkout, guests) => {

    let dateOne = new Date(checkin);
    let dateTwo = new Date(checkout);
  
    let totalDays =
      Math.round(dateTwo.getTime() - dateOne.getTime()) / (1000 * 60 * 60 * 24);
      
    setFormData({
      checkin: checkin,
      checkout: checkout,
      guests: guests,
      totalDays: totalDays
    });

  
  };



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Form
                updateResultList={updateResultList}
                updateFormData={updateFormData}
              />
            }
            path={"/"}
          />
          <Route
            element={<ListItems airbnbList={airbnbList} formData={formData} />}
            path={"/results"}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
