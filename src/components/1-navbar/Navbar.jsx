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
            <div className="text-3xl font-bold tracking-wide flex items-center pr-4">
              <div className="text-cyan-500 pr-4">TMDB</div>
              <div className="h-6 w-12  rounded-s-full rounded-e-full  bg-gradient-to-tr from-cyan-500 to-blue-900"></div>
            </div>
            <div className="font-medium text-lg flex items-center ">
              <div className="pr-4 hidden md:block">Movies</div>
              <div className="pr-4 hidden md:block">TV Shows</div>
              <div className="pr-4 hidden md:block">People</div>
              <div className="pr-4 hidden md:block">More</div>
            </div>
          </div>
          <MdMenu className="text-4xl  md:hidden" />
          <div className="flex items-center">
            <div className="text-lg pr-4 font-medium">Login</div>
            <div className="text-4xl ">
              <CiSearch />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}