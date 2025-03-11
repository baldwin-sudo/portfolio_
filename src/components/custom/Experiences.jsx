import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Experiences() {
  return (
    <div className="w-11/12 max-w-3xl mx-auto text-center mt-15 sm:mt-25 lg:mt-35">
      <h2 className="text-3xl text-shadow-2 font-bold text-white mb-6 sm:text-3xl lg:text-5xl">
        Internships
      </h2>
      <Carousel
        className="p-4 "
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="-ml-4 ">
          <CarouselItem className="basis-full p-1 ">
            <div className="bg-white rounded-sm shadow-lg p-6 text-gray-800">
              <h3 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
                First Internship
              </h3>
              <h3 className="text-3sm italic font-regular  sm:text-xl lg:text-2xl">
                at The Health ministry (morocco)
              </h3>
              <p className="text-gray-600 mt-2 italic sm:text-xl p-1 lg:text-2xl">
                I contributed to the design and development of an information
                system for managing pilgrimage phases, including medication,
                service providers, and patient management. This project was
                built using React and Node.js to create a modern and responsive
                solution.{" "}
              </p>
            </div>
          </CarouselItem>{" "}
          <CarouselItem className="basis-full p-1 ">
            <div className="bg-white rounded-sm shadow-lg p-6 text-gray-800 sm:text-lg lg:text-2xl">
              <h3 className="text-xl font-semibold  sm:text-2xl lg:text-3xl">
                Second Internship
              </h3>
              <h3 className="text-3sm italic font-regular  sm:text-xl lg:text-2xl">
                at The Ministry of National Territorial Planning, Urban
                Planning, ... (morocco)
              </h3>
              <p className="text-gray-600 mt-2 italic p-1  sm:text-xl  lg:text-2xl">
                My internship at the Ministry of Land Planning focused on
                artificial intelligence, where I developed a system for
                evaluating companies' needs before their digitalization. I
                utilized Large Language Models (LLMs) to analyze requirements
                and built a web interface to manage the evaluation process.
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>{" "}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel
        className="p-4 "
        opts={{
          align: "start",
        }}
      >
        <h1 className="text-white text-3xl font-semibold mb-3 sm:text-3xl lg:text-5xl">
          Education
        </h1>

        <CarouselContent className="-ml-4 ">
          <CarouselItem className="basis-full p-1 ">
            <div className="bg-white rounded-sm shadow-lg p-6 text-gray-800 sm:text-lg lg:text-2xl">
              <p className="text-gray-600 mt-2 italic p-1 sm:text-xl p-1 lg:text-2xl ">
                I am currently pursuing an engineering degree in Artificial
                Intelligence and Data Science at ENSAM Rabat (Morocco).
                Additionally, I am enrolled in a double-degree program, through
                which I will obtain my Master's (M2) in Software Engineering
                from UBO Brest (France).
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
