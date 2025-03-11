import React from "react";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Projects() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-11/12 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl tex-shadow-2 font-bold text-white mb-6">
        Projects
      </h2>
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="p-4 "
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="  ">
          <CarouselItem className="basis-full p-1 ">
            <div className="bg-white rounded-sm shadow-lg p-6 text-gray-800  h-60 lg:h-75">
              <h3 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
                Eluxury
              </h3>
              <p className="text-gray-600 mt-2 italic p-1  sm:text-xl  lg:text-2xl">
                Luxury clothes shop , developped using React js , and fakeStore
                Api for the data , deployed using netlify .
              </p>
              <div className="flex  items-center justify-start g-5 flex-col font-bold text-blue-900 py-5">
                <a
                  className=" sm:text-xl  lg:text-2xl "
                  href="https://eluxury.netlify.app/"
                >
                  website link
                </a>
                <a
                  className=" sm:text-xl  lg:text-2xl "
                  href="https://github.com/baldwin-sudo/eluxury"
                >
                  github repository
                </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-full p-1 ">
            <div className="bg-white rounded-sm shadow-lg  p-6 text-gray-800 h-60 lg:h-75">
              <h3 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
                Custom Deep learning Framework
              </h3>
              <p className="text-gray-600 mt-2 italic p-1 sm:text-xl  lg:text-2xl">
                I made my own Deep learning framework ,inspired by the design of
                Pytorch's.
              </p>
              <p className="text-gray-600 mt-2 italic p-1  sm:text-xl  lg:text-2xl">
                Implemented Firstly using Python ,and Secondly a minimal version
                using Rust.
              </p>
              <div className="flex  items-center justify-start g-5 flex-col font-bold text-blue-900 py-5 ">
                <a
                  className=" sm:text-xl  lg:text-2xl "
                  href="https://github.com/baldwin-sudo/deep-learning-framework"
                >
                  Python github repository{" "}
                </a>
                <a
                  className="  sm:text-xl  lg:text-2xl"
                  href="https://github.com/baldwin-sudo/deep-learning-rs"
                >
                  Rust github repository{" "}
                </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-full p-1 ">
            <div className="bg-white rounded-sm shadow-lg p-6 text-gray-800  h-60 lg:h-75">
              <h3 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
                PassKeeper
              </h3>
              <p className="text-gray-600 mt-2 italic p-1 sm:text-xl  lg:text-2xl">
                My own passwords manager , built using React js , Golang and
                Sqlite .(on going developement)
              </p>
              <div className="flex  items-center justify-start g-5 flex-col font-bold text-blue-900 py-5">
                <a
                  className="  sm:text-xl  lg:text-2xl"
                  href="https://github.com/baldwin-sudo/PassKeeper"
                >
                  website link (not deployed yet!)
                </a>
                <a className="  sm:text-xl  lg:text-2xl">github repository </a>
              </div>
            </div>
          </CarouselItem>{" "}
          <CarouselItem className="basis-full p-3">
            <div className="bg-white rounded-sm shadow-lg p-6 text-gray-800  h-60 lg:h-75">
              <h3 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
                Rag based Chatbot
              </h3>
              <p className="text-gray-600 mt-2 italic p-1 sm:text-xl  lg:text-2xl">
                An AI-powered chatbot with memory and history, built using
                LangChain and Streamlit. Just upload your PDFs—Lama will parse
                them, Elasticsearch will index the content, and OpenAI will
                deliver smart, context-aware responses.
              </p>
              <div className="flex  items-center justify-start g-5 flex-col font-bold text-blue-900 py-5">
                <a
                  className="  sm:text-xl  lg:text-2xl"
                  href="https://github.com/baldwin-sudo/baldwin-templates"
                >
                  github repository
                </a>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="text-sky-50 text-lg  sm:text-xl  lg:font-semibold lg:text-3xl">
        {current} of {count}
      </p>
    </div>
  );
}
