import { useState } from "react";
import { Link } from "react-router";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import * as React from "react";
import { useLocation } from "react-router-dom";
import Home from "./components/custom/Home";
import Contact from "./components/custom/Contact";
import Projects from "./components/custom/Projects";
function App() {
  const location = useLocation();
  const [shouldRender, setShouldRender] = useState(false);
  React.useEffect(() => {
    // Google Analytics
    setShouldRender(location.pathname !== "/");
  }, [location]);
  return (
    <div
      className="  relative bg-[url('./assets/bg.jpg')] h-screen bg-cover bg-center p-10
        "
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={null} />
        <Route path="/tech-stack" element={null} />
      </Routes>
      <Contact />{" "}
      {shouldRender && (
        <Link to="/">
          <img
            className="fixed bottom-0 mb-1 left-0 size-14"
            src="src/assets/up.png"
            alt=""
          />
        </Link>
      )}
    </div>
  );
}

export default App;
