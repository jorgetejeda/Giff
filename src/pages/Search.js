import React, { useState, useEffect } from "react";
import ListOfGif from "../components/ListOfGif";
import Loading from "../components/Loading";
import getGifs from "../services/getGifs";

export default function Search({ params }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { keyword } = params;
  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) =>{
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  return (<>{loading ? <Loading/> : <ListOfGif gifs={gifs} />}</>);
}
