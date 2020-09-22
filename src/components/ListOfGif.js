import React, { useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif";

export default function ListOfGif({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState({
    loading: false,
    results: [],
  });

  useEffect(() => {
    //los set tambien pueden recibir una funcion, lo que estamos haciendo es
    //Inicializando la variable results con el estado actual que tiene
    //la funcion setGifs
    setGifs((actualGifs) => ({ loading: true, results: actualGifs.results }));

    getGifs({ keyword }).then((gifs) =>
      setGifs({ loading: false, results: gifs })
    );
  }, [keyword]);
  //Cada vez que cambie este parametro, se ejecuta nuevamente el efecto

  if (gifs.loading) return <i>Cargando 🔥</i>;

  return (
    <>
      {gifs.results.map(({ id, title, url }) => (
        <Gif 
            id={id} 
            key={id} 
            title={title} 
            url={url} 
        />
      ))}
    </>
  );
}
