import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Projects() {
  return (
    <div className="w-11/12 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl tex-shadow-2 font-bold text-white mb-6">
        Projects
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
              <h3 className="text-xl font-semibold">Eluxury</h3>
              <p className="text-gray-600 mt-2 italic">
                Luxury clothes shop , developped using React js , and fakeStore
                Api for the data , deployed using netlify .
              </p>
              <div className="flex  items-center justify-start g-5 flex-col font-bold text-orange-600 py-5">
                <a className=" " href="https://eluxury.netlify.app/">
                  website link
                </a>
                <a className=" " href="https://github.com/baldwin-sudo/eluxury">
                  github repo link
                </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-full p-1 ">
            <div className="bg-white rounded-sm shadow-lg p-6 text-gray-800">
              <h3 className="text-xl font-semibold">Eluxury</h3>
              <p className="text-gray-600 mt-2 italic">
                Luxury clothes shop , developped using React js , and fakeStore
                Api for the data , deployed using netlify .
              </p>
              <div className="flex  items-center justify-start g-5 flex-col font-bold text-orange-600 py-5">
                <a className=" " href="">
                  website link
                </a>
                <a className=" ">github repo link </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-full p-1 ">
            <div className="bg-white rounded-sm shadow-lg p-6 text-gray-800">
              <h3 className="text-xl font-semibold">Eluxury</h3>
              <p className="text-gray-600 mt-2 italic">
                Luxury clothes shop , developped using React js , and fakeStore
                Api for the data , deployed using netlify .
              </p>
              <div className="flex  items-center justify-start g-5 flex-col font-bold text-orange-600 py-5">
                <a className=" " href="">
                  website link
                </a>
                <a className=" ">github repo link </a>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
