import React from "react";
import { Link } from "react-router-dom";

// assets
import burgerClose from "../assets/closeMenu.svg";
import burger from "../assets/burgerMenu.svg";
import Logo from "./Logo";

export default function Navbar({
  isOpen,
  setIsOpen,
  toggleMenu,
  close,
  scrollToFooter,
}) {
  const maxWidth = () => {
    return window.matchMedia("(min-width: 1024px)").matches;
  };

  const setWidth = () => {
    if (isOpen && maxWidth()) {
      setIsOpen(!isOpen);
    }
  };
  setWidth();
  window.addEventListener("resize", setWidth);

  return (
    <nav className=" sticky top-0 z-20  w-full h-fit flex bg-white shadow-xl py-4 px-7 items-center ">
      <Logo />

      {!isOpen && (
        <img
          src={burger}
          onClick={toggleMenu}
          alt="open"
          className="burger"
          loading="lazy"
        />
      )}
      {isOpen && (
        <img
          src={burgerClose}
          onClick={toggleMenu}
          alt="open"
          className="burger"
          loading="lazy"
        />
      )}

      <ul
        className={`fixed  top-0  right-0 w-[55%] md:w-[40%] h-full z-40 bg-white pt-28 shadow-xl lg:shadow-none ${
          isOpen ? "block" : "hidden"
        }   lg:flex lg:static lg:bg-transparent lg:w-fit lg:pt-0 lg:h-fit lg:animate-none  lg:transition-none  lg:transform-none lg:mr-12`}
        onClick={close}
      >
        <li className="nav-links">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-links">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-links">
          <Link onClick={scrollToFooter}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
