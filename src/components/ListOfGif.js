import React, { useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif";

export default function ListOfGif({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword })
        .then((gifs) => setGifs(gifs));
  }, [keyword]); 
  //Cada vez que cambie este parametro, se ejecuta nuevamente el efecto

  return gifs.map(({ id, title, url }) => (
    <Gif 
        id={id} 
        key={id} 
        title={title} 
        url={url} 
    />
  ));
}
