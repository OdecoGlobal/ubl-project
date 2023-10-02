import React from "react";
import logo from "../assets/ubl-logo.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <>
      <Link to="/" className="mr-auto">
        <div className="flex ">
          <img
            src={logo}
            alt="logo"
            className="w-12 object-contain"
            loading="lazy"
          />
          <div className="font-bold text-center leading-none ml-4">
            <p className="text-primary-200 text-2xl tracking-wide leading-none md:text-5xl md:tracking-wider">
              UNIZIK
            </p>
            <p className="text-accent-200 text-xs md:text-lg tracking-wider  ">
              BLOCKCHAIN LAB
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
