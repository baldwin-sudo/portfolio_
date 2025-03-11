import React from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import "./home.css";
function Home() {
  return (
    <>
      {" "}
      <img
        className=" w-12 mx-auto mt-2 sm:w-16  "
        src="/assets/src-code.png"
        alt="src code"
      />
      <div className="flex flex-col w-fit       py-4 box-content sm:!w-full mx-auto sm:pl-30  ">
        <h1 className="text-sky-100 text-shadow-2 font-semibold text-4xl box-content   lg:text-5xl xl:text-7xl">
          I'm <span className="baldwin-icon">B</span>aldwin-sudo
        </h1>

        <p className="italic rounded-xs text-xl text-sky-50 text-shadow-2 px-2 font-extralight  lg:text-2xl xl:text-3xl">
          <Typewriter
            words={["software-developer", "machine learning engineer"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>
      <div className="absolute flex flex-col top-2/5 left-1/2 -translate-x-1/2 w-fit mx-auto mt-10 text-2xl  sm:gap-x-2 sm:!flex-row lg:text-3xl xl:text-4xl lg:gap-x-8  ">
        <Link
          className="nav-items font-semibold text-sky-50 text-shadow-1    mb-2 h-fit  p-2 border-1 border-b-3 border-r-3 rounded-sm  sm:w-42 sm:text-center lg:w-56"
          to="/projects"
        >
          Projects
        </Link>

        <Link
          className=" nav-items font-semibold text-sky-50 text-shadow-1  h-fit  mb-2 p-2 border-1 border-b-3 border-r-3 rounded-sm sm:w-42 sm:text-center lg:w-56"
          to="/tech-stack"
        >
          Tech stack
        </Link>
        <Link
          className=" nav-items font-semibold text-sky-50 text-shadow-1  h-fit mb-2 p-2  border-1 border-b-3 border-r-3 rounded-sm sm:w-42 sm:text-center lg:w-56"
          to="/experiences"
        >
          Experiences
        </Link>
      </div>
    </>
  );
}

export default Home;
