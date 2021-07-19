import React from "react";
import {image} from "../data/user.js";
import Home from "./Home.js";
import NavBar from "./NavBar.js";
import About from "./About.js";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
