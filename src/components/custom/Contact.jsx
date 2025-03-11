import React, { useRef } from "react";

export default function Contact() {
  const modalDiv = useRef(null);
  const sayHelloRef = useRef(null);

  const handleCloseModal = (e) => {
    // Ensure clicks inside the modal (on buttons/icons) don’t close it
    if (e.target === modalDiv.current) {
      modalDiv.current.classList.toggle("hidden");
      sayHelloRef.current.classList.toggle("hidden");
    }
  };

  const handleSayHello = () => {
    modalDiv.current.classList.toggle("hidden");
    sayHelloRef.current.classList.toggle("hidden");
  };

  return (
    <>
      {/* Modal Background */}
      <div
        className="hidden absolute top-0 left-0 bg-black h-min-screen h-full w-screen opacity-90 p-0 m-0 flex items-center justify-center"
        ref={modalDiv}
        onClick={handleCloseModal} // Clicking outside will close it
      >
        {/* Modal Content */}
        <div className=" flex gap-5">
          <img
            className="absolute top-0 right-0 m-5 size-8 hover:opacity-60 cursor-pointer"
            src="/assets/close.png"
            alt="Close"
            onClick={handleCloseModal}
          />
          <ul className="flex flex-row items-center justify-center gap-5">
            <li>
              <a
                className="text-white flex items-center justify-center gap-3"
                href="https://www.linkedin.com/in/el-mehdi-kasmi-04ab45231/"
                onClick={handleCloseModal}
              >
                <img
                  className="size-14 sm:size-18 lg:size-22"
                  src="/assets/linkedin.png"
                  alt="LinkedIn"
                />
              </a>
            </li>
            <li>
              <a
                className="text-white flex items-center justify-center gap-3"
                href="https://github.com/baldwin-sudo"
                onClick={handleCloseModal}
              >
                <img
                  className="size-14 sm:size-18 lg:size-22"
                  src="/assets/github-1.png"
                  alt="GitHub"
                />
              </a>
            </li>
            <li>
              <a
                className="text-white flex items-center justify-center gap-3"
                href="mailto:kasmimehdi561@gmail.com"
                onClick={handleCloseModal}
              >
                <img
                  className="size-14 sm:size-18 lg:size-22"
                  src="/assets/gmail.png"
                  alt="Gmail"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-0 w-full flex gap-10 p-5 justify-center items-center sm:text-2xl">
        <a
          href="/assets/KASMI-Elmehdi-CV-v.eng.pdf"
          className="text-sky-50 font-light"
          download="KASMI-Elmehdi-CV-v.eng.pdf"
        >
          Resume
        </a>
        <button
          className="text-sky-50 font-light border-1 px-4 py-1 rounded-sm sm:px-6"
          onClick={handleSayHello}
          ref={sayHelloRef}
        >
          Say Hello
        </button>
      </div>
    </>
  );
}
