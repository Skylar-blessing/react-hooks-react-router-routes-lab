import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { actors, movies } from "../data";

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <route exact path="/" component={Home}/>
      <route path="/movies" component={Movies}/>
      <route path="/directors" component={Directors}/>
      <route path="/actors" component={Actors}/>

    </div>
    </BrowserRouter>
  );

export default App;
