import "./App.scss";
import Home from "./container/Home";
import { Routes, Route } from "react-router-dom";
import WorkDescription from "./container/WorkDescription/WorkDescription";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<WorkDescription />} />
      </Routes>
    </div>
  );
}

export default App;
