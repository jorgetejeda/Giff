import React, {useState} from "react";
import { Link, useLocation } from "wouter";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  // la primera variable la llamamos Path pero al no utilizarla
  // tenemos en consola la advertencia de que tenemos una variable
  // que no se esta utilizando por eso solo agregamos una ","
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
    </>
  );
}
