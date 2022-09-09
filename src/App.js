import "./App.css";
import Form from "./component/Form";
import ListItems from './component/ListItems'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Form />} path={"/"} />
          <Route element={<ListItems />} path={"/results"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
