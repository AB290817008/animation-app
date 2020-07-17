import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./App2.css";

import Highway from "./Components/Highway";
import City from "./Components/City";
import Car from "./Components/Car";
import Wheels from './Components/Wheels'


export default function App() {
  return (
    <div className="main">
      <img src={require("./Images/sky.jpg")} alt="" />
      <Highway />
      <City />
      <Car/>
    </div>
  );
}
