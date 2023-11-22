'use client'
import { useState } from "react";
import Toggle from "./components/Toggle";
import HorizontalList from "./components/HorizontalList";

export default function Trending() {
  const [movies,setMovies] = useState(true)
  function clickHandler(){
    setMovies(!movies)
  }
  return (
    <div className=" mt-5 md:mt-10 md:px-20 px-10 flex flex-col items-start gap-5 mx-[5vw] overflow-x-scroll overflow-y-hidden h-[55vh]"  style={{backgroundImage:`url('/assets/images/bg5.JPG')`}} >

      <div className="flex justify-center items-center gap-5" >
        <h2 className=" cursor-pointer font-semibold text-2xl">Trending</h2>
        <Toggle first={'Movies'} second={'Series'} clickHandler={clickHandler}/>
      </div>

      <div className="w-full ">
        <HorizontalList  movies={movies}/>
      </div>

    </div>
  )
}