import React from "react";
import {HashRouter, Route} from "react-router-dom";
import About from "./route/about";
import Detail from "./route/Detail";
import Home from "./route/home";
import Navigation from "./components/Navigation";

function App() {

  return (<HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/movie_detail" component={Detail}/>
  </HashRouter>);

  }

export default App;