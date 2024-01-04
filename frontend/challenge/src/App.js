import "./App.css";
import Home from "./components/Home/Home";
import { Context } from "./context/Context";
import { Routes, Route } from "react-router-dom";
import Archive from "./components/Archive/Archive";

function App() {
  return (
    <div className="App">
      <Context>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archived" element={<Archive />} />
        </Routes>
      </Context>
    </div>
  );
}

export default App;
