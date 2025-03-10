import React from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

import { useLocation } from "react-router";
function Home() {
  return (
    <>
      <div className="flex-col   w-fit mx-auto gap-y-5">
        <img
          className="w-12 mx-auto"
          src="/assets/src-code.png"
          alt="src code"
        />
        <h1 className="  text-sky-100 text-shadow-2  font-semibold text-4xl box-content w-fit ">
          I'm baldwin-sudo
        </h1>
        <p className="italic rounded-xs text-3xs text-sky-50 text-shadow-2 px-2 font-extralight text-shadow w-fit ">
          <Typewriter
            words={["software-developer", "machine learning engineer"]}
            loop={true} // Set to `true` for infinite looping
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>
      <div className="absolute flex flex-col top-2/5 left-1/2 -translate-x-1/2 w-fit mx-auto mt-10 ">
        <Link
          className="font-semibold text-sky-50 text-shadow-1 text-5xl mb-2 p-2 border-1 border-b-3 border-r-3 rounded-sm"
          to="/projects"
        >
          Projects
        </Link>

        <Link
          className="font-semibold text-sky-50 text-shadow-1 text-5xl mb-2 p-2 border-1 border-b-3 border-r-3 rounded-sm"
          to="/tech-stack"
        >
          Tech Stack
        </Link>
        <Link
          className="font-semibold text-sky-50 text-shadow-1 text-5xl mb-2 p-2 border-1 border-b-3 border-r-3 rounded-sm"
          to="/experiences"
        >
          Experiences
        </Link>
      </div>
    </>
  );
}

export default Home;
