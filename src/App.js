import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import {Route, Switch} from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Switch>
          <Route component={Home} path="/"/>
          <Route component={Search} path="/search/:keyword"/>
        </Switch>
      </section>
    </div>
  );
}

export default App;
