import React, {useState} from "react";
import { Link, useLocation } from "wouter";

const POPULAR_GIFS = ["Aquaman", "Superman", "Batman", "Thor", "SirenoMan"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [, location] = useLocation();
  
  const handleSubmit = evt =>{
      evt.preventDefault();
      //Navegar a otra ruta
      location(`/search/${keyword}`);
  }
  const handleChange = evt =>{
      setKeyword(evt.target.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} onChange={(handleChange)}/>
      </form>
      <h3>Los gifs populares <span role="img" aria-label="img">🔥</span></h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}> Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
