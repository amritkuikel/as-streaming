"use client";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { motion, useInView } from "framer-motion";
export default function NavBar() {
  const navRef = useRef(null);
  const navView = useInView(navRef);
  return (
    <div className="bg-sky-950 cursor-pointer">
      <div className="h-1 w-full absolute" ref={navRef}></div>
      <motion.div
        className=" bg-sky-950 text-white "
        variants={{
          initial: { y: "-100%" },
          viewT: { y: "0%"  },
          viewF: { y: "-130%" },
        }}
        initial={"initial"}
        animate={navView ? "viewT" : "viewF"}
        transition={{ duration: 1, ease: "backInOut" }}
      >
        <div className="py-5 flex justify-between items-center px-[10vw]">
          <div className=" flex">
            <div className="text-lg md:text-3xl md:font-bold md:tracking-wide flex items-center md:pr-4 pr-2">
              <div className="text-cyan-500 pr-1">TMDB</div>
              <div className="md:h-6 md:w-12 h-4 w-9  rounded-s-full rounded-e-full  bg-gradient-to-tr from-cyan-500 to-blue-900"></div>
            </div>
            <div className="font-medium text-lg flex items-center ">
              <div className="pr-4 hidden md:block">Movies</div>
              <div className="pr-4 hidden md:block">TV Shows</div>
              <div className="pr-4 hidden md:block">People</div>
              <div className="pr-4 hidden md:block">More</div>
            </div>
          </div>
          <MdMenu className="text-xl  md:hidden" />
          <div className="flex items-center">
            <div className="text-lg  pr-1 md:font-medium">Login</div>
            <div className="text-2xl ">
              <CiSearch />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}