"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalCard from './HorizontalCard'

export default function HorizontalList() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=92f1a9b8bd84a589617f01fea605e96e"
      )
      .then((Response) => {
        setState(Response.data.results);
      });
  }, []);
  return (
    <div className=' flex md:gap-5 gap-1 overflow-x-scroll '>
          {state.map((s) => (
        <HorizontalCard
          key={s.title}
          value={s.vote_average}
          name={s.title}
          date={s.release_date}
          img={s.backdrop_path}
        />
      ))}
    </div>
  )
}