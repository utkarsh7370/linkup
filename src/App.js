import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Card from "./components/mainContent/Card/Card";
import data from "./components/mainContent/Card/data";
import "./components/mainContent/Card/Card.css";
import MainContent from "./components/mainContent/MainContent";
import Individual from "./components/Individual/Individual";
import Login from "./components/Sign/Login/Login";
import Register from "./components/Sign/Register/Register"

export default function App() {
  return (
    
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<MainContent />}></Route>
    //     <Route path="/individual" element={<Individual />}></Route>
    //     {/* <Route path="/Login"element={<Login />} />
    //     <Route path="/Register" element={<Register />} /> */}
       
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<MainContent />}></Route>
     <Route path="/individual" element={<Individual />}></Route>
        <Route path="/Login"element={<Login />}></Route> 
        <Route path="/Register" element={<Register />} ></Route>
    </Routes>
    </BrowserRouter>
  );
}
