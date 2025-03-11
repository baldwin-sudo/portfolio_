import { useState } from "react";
import { Link } from "react-router-dom"; // Fix incorrect import
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Fix import
import * as React from "react";
import Experiences from "./components/custom/Experiences";
import Home from "./components/custom/Home";
import Contact from "./components/custom/Contact";
import Projects from "./components/custom/Projects";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

function App() {
  const location = useLocation();
  const [shouldRender, setShouldRender] = useState(false);

  React.useEffect(() => {
    setShouldRender(location.pathname !== "/");
  }, [location]);

  return (
    <div className="relative bg-[url('/assets/bg-2.jpg')] box-content h-fit min-h-screen bg-cover bg-center p-2  ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/tech-stack" element={null} />
      </Routes>
      <Contact />

      {/* Animated Arrow */}
      <AnimatePresence>
        {shouldRender && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-0 left-0 m-2"
          >
            <Link to="/">
              <img className="size-12" src="/assets/up.png" alt="Go Up" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
