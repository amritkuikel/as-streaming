"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalCard from "./HorizontalCard";

export default function HorizontalList({ movies }) {
  const [state, setState] = useState([]);
  useEffect(() => {
    let a;
    if (movies) {
      a = "popular";
    } else {
      a = "top_rated";
    }
    axios
      .get(
        "https://api.themoviedb.org/3/movie/"+encodeURIComponent(a)+"?language=en-US&page=1&api_key=92f1a9b8bd84a589617f01fea605e96e"
      )
      .then((Response) => {
        setState(Response.data.results);
      });
    
  }, [movies]);
  return (
    <div className=" flex md:gap-5 gap-2 pb-5 ">
      {state.map((s) => (
        <HorizontalCard
          id={s.id}
          key={s.title}
          value={s.vote_average}
          name={ s.title }
          date={ s.release_date }
          img={s.backdrop_path}
        />
      ))}
    </div>
  );
}
