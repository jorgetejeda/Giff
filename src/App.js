import React from "react";
import "./App.css";
import ListOfGif from "./components/ListOfGif";
import Home from "./pages/index";
import {Route} from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Home/>
        <Route 
          component={ListOfGif}
          path="/search/:keyword" 
        />
      </section>
    </div>
  );
}

export default App;
