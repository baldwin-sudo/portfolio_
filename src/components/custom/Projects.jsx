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
                  github repository
                </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-full p-1 ">
            <div className="bg-white rounded-sm shadow-lg p-6 text-gray-800">
              <h3 className="text-xl font-semibold">
                Custom Deep learning Framework
              </h3>
              <p className="text-gray-600 mt-2 italic">
                I made my own Deep learning framework ,inspired by the design of
                Pytorch's.
              </p>
              <p className="text-gray-600 mt-2 italic">
                Implemented Firstly using Python ,and Secondly a minimal version
                using Rust.
              </p>
              <div className="flex  items-center justify-start g-5 flex-col font-bold text-orange-600 py-5">
                <a
                  className=" "
                  href="https://github.com/baldwin-sudo/deep-learning-framework"
                >
                  Python github repository{" "}
                </a>
                <a
                  className=" "
                  href="https://github.com/baldwin-sudo/deep-learning-rs"
                >
                  Rust github repository{" "}
                </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-full p-1 ">
            <div className="bg-white rounded-sm shadow-lg p-6 text-gray-800">
              <h3 className="text-xl font-semibold">PassKeeper</h3>
              <p className="text-gray-600 mt-2 italic">
                My own passwords manager , built using React js , Golang and
                Sqlite .(on going developement)
              </p>
              <div className="flex  items-center justify-start g-5 flex-col font-bold text-orange-600 py-5">
                <a
                  className=" "
                  href="https://github.com/baldwin-sudo/PassKeeper"
                >
                  website link (not deployed yet!)
                </a>
                <a className=" ">github repository </a>
              </div>
            </div>
          </CarouselItem>{" "}
          <CarouselItem className="basis-full p-1 ">
            <div className="bg-white rounded-sm shadow-lg p-6 text-gray-800">
              <h3 className="text-xl font-semibold">Rag based Chatbot</h3>
              <p className="text-gray-600 mt-2 italic">
                An AI-powered chatbot with memory and history, built using
                LangChain and Streamlit. Just upload your PDFs—Lama will parse
                them, Elasticsearch will index the content, and OpenAI will
                deliver smart, context-aware responses.
              </p>
              <div className="flex  items-center justify-start g-5 flex-col font-bold text-orange-600 py-5">
                <a
                  className=" "
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
    </div>
  );
}
