import "./App.css";
import {useState} from 'react'
import Form from "./component/Form";
import ListItems from './component/ListItems'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [airbnbList, setAirbnbList] = useState();

  const updateResultList = (data) => {
    console.log(data);
    setAirbnbList(data);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Form updateResultList={updateResultList}/>} path={"/"} />
          <Route element={<ListItems airbnbList={airbnbList} />} path={"/results"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
