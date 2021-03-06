import React from "react";
import Gif from "./Gif";

export default function ListOfGif({ gifs }) {

  return (
    <div className="ListOfGif">
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  );
}
