import "./App.scss";
import Home from "./container/Home";
import { Routes, Route } from "react-router-dom";
import WorkDescription from "./container/WorkDescription/WorkDescription";
import Contact from "./container/Contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<WorkDescription />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
