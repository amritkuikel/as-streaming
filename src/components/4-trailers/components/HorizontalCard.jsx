'use client'

import React,{useState} from 'react'
import {FaPlay} from 'react-icons/fa'

export default function HorizontalCard({img, title, subtitle}) {
  return (
    <div className='flex min-w-[350px] flex-col gap-5 items-center justify-center'>
        <div className='relative' >
            <img className='relative h-[200px] rounded-xl w-auto' src={img} height={0} width={0}/>
            <div><FaPlay className='text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' size={40}/> </div>
        </div>
        <div className='text-center'>
            <h2 className='font-bold '>{title}</h2>
            <h2 className='text-gray-200 text-[12px] font-normal'>{subtitle}</h2>
        </div>
    </div>
  )
}

//src='/assets/images/napoleon.jpg'

