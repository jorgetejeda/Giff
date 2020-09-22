import React, {useState} from "react";
import "./App.css";
import ListOfGif from "./components/ListOfGif";

function App() {
  const [keyword, setKeyword] = useState('panda');
  return (
    <div className="App">
      <section className="App-content">
        <button onClick={()=>setKeyword('mapache')}>
          Cambiar keyword
        </button>
        <ListOfGif keyword={keyword}/>
      </section>
    </div>
  );
}

export default App;
