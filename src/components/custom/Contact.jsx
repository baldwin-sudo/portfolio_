import React, { useRef } from "react";

export default function Contact() {
  const modalDiv = useRef(null);
  const sayHelloRef = useRef(null);

  const handleCloseModal = () => {
    modalDiv.current.classList.toggle("hidden");
    sayHelloRef.current.classList.toggle("hidden");
  };
  const handleSayHello = () => {
    modalDiv.current.classList.toggle("hidden");
    sayHelloRef.current.classList.toggle("hidden");
  };
  return (
    <>
      <div
        className="hidden absolute top-0 left-0 bg-black h-screen w-screen opacity-90 p-0 m-0 "
        ref={modalDiv}
      >
        <img
          className="absolute top-0 right-0 m-5 size-8 hover:opacity-60"
          src="/assets/close.png"
          alt=""
          onClick={handleCloseModal}
        />
        <ul className="flex flex-row  items-center justify-center h-full  gap-5     ">
          <li>
            <a
              className="text-white flex items-center justify-center gap-3  "
              href="https://www.linkedin.com/in/el-mehdi-kasmi-04ab45231/"
            >
              <img className="size-14" src="/assets/linkedin.png " alt="" />
            </a>
          </li>
          <li>
            <a
              className="text-white flex items-center justify-center gap-3    "
              href="https://github.com/baldwin-sudo"
            >
              {" "}
              <img className="size-14" src="/assets/github-1.png" alt="" />
            </a>
          </li>
          <li>
            <a
              className="text-white flex items-center justify-center gap-3  "
              href="mailto:kasmimehdi561@gmailcom"
            >
              {" "}
              <img className="size-14" src="/assets/gmail.png" alt="" />
            </a>
          </li>
        </ul>
      </div>

      <div className="fixed  left-1/2 -translate-x-1/2 bottom-0  w-full flex gap-10 p-5 justify-center items-center ">
        <p className="text-sky-50 font-light ">Resume</p>
        <button
          className="text-sky-50 font-light  border-1 px-4 rounded-sm"
          onClick={handleSayHello}
          ref={sayHelloRef}
        >
          Say Hello
        </button>
      </div>
    </>
  );
}
