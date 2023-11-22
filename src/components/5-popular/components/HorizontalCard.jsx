"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HorizontalCard({ value, date, name, img }) {
  return (
    <div className="flex min-w-[152px] flex-col gap-7">
      <div className="relative">
        <Link href="/movie">
          <img
            className="h-[200px] rounded-xl w-auto"
            src={`https://image.tmdb.org/t/p/original${img}`}
            height={0}
            width={0}
          />
        </Link>
        <div className="absolute h-10 w-10 bg-emerald-950 rounded-full -bottom-5 left-5 flex justify-center items-center text-white font-bold text-[13px]">
          {value}
        </div>
      </div>
      <div className="">
        <Link href="/movie">
          <h2 className="font-bold">{name}</h2>
        </Link>
        <h2 className="text-gray-500 text-sm font-semibold">{date}</h2>
      </div>
    </div>
  );
}

/* 
<div className='relative'>
<img className='h-[200px] rounded-xl w-auto' src='/assets/images/theboys.jfif' height={0} width={0}/>
<div className='absolute h-10 w-10 bg-emerald-950 rounded-full -bottom-5 left-5 flex justify-center items-center text-white font-bold text-[13px]'>82%</div>
</div>
<div className=''>
<h2 className='font-bold'>The Boys</h2>
<h2 className='text-gray-500 text-sm font-semibold'>July 25, 2019</h2>
</div>

*/
