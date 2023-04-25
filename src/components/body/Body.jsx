import React from "react";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import "../../assets/css/Main.css";

const Body = () => {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="contact/" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Body;
