import "./App.css";
import { useState, React } from "react";
import Form from "./component/Form";
import ListItems from "./component/ListItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [airbnbList, setAirbnbList] = useState([]);
  const [day, setDays] = useState();
  const [formData, setFormData] = useState({});

  const updateResultList = (data) => {
    setAirbnbList(data.data);
  };
  const diffDays = (days) => {
    setDays(days);
  };

  const updateFormData = (checkin, checkout, guests) => {
    setFormData({
      checkin: checkin,
      checkout: checkout,
      guests: guests,
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
