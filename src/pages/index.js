import React from "react";

import { Link } from "wouter";

const POPULAR_GIFS = ["Aquaman", "Superman", "Batman", "Thor", "SirenoMan"];

export default function Home() {
  return (
    <>
      <h3>Los gifs populares</h3>
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
