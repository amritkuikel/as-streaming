"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalCard from "./HorizontalCard";

export default function HorizontalList({ movies }) {
  const [state, setState] = useState([]);
  useEffect(() => {
    let a;
    if (movies) {
      a = 'movie';
    }
    else{
      a= 'tv'
    }
    axios
      .get(
        "https://api.themoviedb.org/3/discover/"+encodeURIComponent(a)+"?api_key=92f1a9b8bd84a589617f01fea605e96e&sort_by=popularity.desc&page=1"
      )
      .then((Response) => {
        setState(Response.data.results);
      });
  }, [movies]);
  return (
    <div className=" flex gap-5 pb-5 " >
      {state.map((s) => (
        <HorizontalCard
          key={s.title}
          value={s.vote_average}
          name={movies?s.title:s.name}
          date={movies?s.release_date:s.first_air_date}
          img={s.backdrop_path}
        />
      ))}
    </div>
  );
}