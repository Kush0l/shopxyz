import "./App.css";
import Login from "./components/Login";

import Home from "./components/Home";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
