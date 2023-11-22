"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalCard from './HorizontalCard'

export default function HorizontalList() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=92f1a9b8bd84a589617f01fea605e96e&sort_by=popularity.desc&page=1"
      )
      .then((Response) => {
        setState(Response.data.results);
      });
  }, []);
  return (
    <div className=' flex gap-5 overflow-x-scroll '>
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