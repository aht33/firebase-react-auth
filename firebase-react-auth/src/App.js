import React from "react";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
