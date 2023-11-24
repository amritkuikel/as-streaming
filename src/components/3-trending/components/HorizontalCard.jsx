"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HorizontalCard({ value='0', name, date, img,id }) {
  const imageUrl = `https://image.tmdb.org/t/p/original${img}`;
  return (
    <div className="flex md:min-w-[152px] min-w-[100px] flex-col md:gap-7 gap-5">
      <div className="relative">
        <Link href={`/movie/${id}`}>
          <img
            className="h-40 w-32 md:h-[200px] md:w-80 rounded-xl object-cover"
            src={imageUrl}
            height={0}
            width={0}
          />
        </Link>

        <div className=" cursor-pointer absolute h-10 w-10 bg-emerald-950 rounded-full -bottom-5 left-5 flex justify-center items-center text-white font-bold text-[13px]">
          {value}
        </div>
      </div>
      <div className="">
        <Link href='/movie'>
          <h2 className="md:font-bold font-semibold hover:text-teal-600 cursor-pointer">
            {name}
          </h2>
        </Link>

        <h2 className="text-gray-500 text-sm font-semibold cursor-pointer">
          {date}
        </h2>
      </div>
    </div>
  );
}
