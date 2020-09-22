import React from "react";
import "./App.css";
import ListOfGif from "./components/ListOfGif";

import {Route, Link} from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/superman">Superman</Link>
        <Link to="/gif/react">React</Link>
        <Link to="/gif/mac">Mac</Link>
        <Route 
          component={ListOfGif}
          path="/gif/:keyword" 
        />
      </section>
    </div>
  );
}

export default App;
