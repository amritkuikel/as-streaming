'use client'

import React, { useState } from "react";

export default function Toggle({first, second,clickHandler}) {
  const [activeButton, setActiveButton] = useState(first);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    if(activeButton===first && button===second){
      clickHandler();
    }
    else if(activeButton===second && button===first){
      clickHandler()
    }
  };

  return (
    <div className="flex rounded-3xl bg-white  border-2 border-blue-400">
        <button
        className={` rounded-3xl px-7 py-1 transition ${
          activeButton === first ? "bg-blue-500 text-white" : "bg-white"
        }`}
        onClick={() => handleButtonClick(first)}
      >
        {first}
      </button>
      <button
        className={` rounded-3xl  px-7 py-1 transition ${
          activeButton === second ? "bg-blue-500 text-white" : "bg-white"
        }`}
        onClick={() => handleButtonClick(second)}
      >
        {second}
      </button>
    </div>
  )
}