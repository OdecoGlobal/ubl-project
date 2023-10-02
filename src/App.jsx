import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRef, useState } from "react";

// Pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Event from "./pages/Event";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const footerRef = useRef(null);

  // Functions
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeNav = () => {
    if (isOpen) setIsOpen(false);
  };

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          close={closeNav}
          setIsOpen={setIsOpen}
          scrollToFooter={scrollToFooter}
        />
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
            onClick={toggleMenu}
          ></div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Event />} />
        </Routes>
        <div ref={footerRef}>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
