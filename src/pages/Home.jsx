import { Link } from "react-router-dom";
import React from "react";

// Components
import Hero from "../components/Hero";
// assets
import flyer from "../assets/flyernew.jpg";
import dark from "../assets/darkBg.jpg";
import pics from "../assets/photos.jpg";
import logo from "../assets/ubl-logo.png";
import Mission from "../components/Mission";

export default function Home() {
  return (
    <div>
      <Hero />
      <div
        className="mt-3  py-4 bg-slate-950"
        style={{
          backgroundImage: `url(${dark})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-center my-4 text-white text-2xl md:text-4xl font-bold ">
          UPCOMING EVENTS
        </h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-1 px-4">
          <img
            src={logo}
            alt="event-flyer"
            loading="lazy"
            className=" md:w-[30rem] mb-4 md:mb-0 mx-auto "
          />
          <img
            src={flyer}
            alt="event-flyer"
            loading="lazy"
            className=" md:w-[30rem] mx-auto"
          />

          {/* <NewEvent /> */}
        </div>
        {/* Links */}
        <div className="flex w-full justify-center mt-5">
          <a
            className="w-fit  mr-4 flex justify-center items-center py-1 px-3 text-2xl text-white bg-accent-200 hover:bg-primary-200 rounded-full  "
            href="https://bit.ly/UBLConference2023"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </a>
          <Link
            className="w-fit  flex justify-center items-center py-1 px-3 text-xl text-white bg-accent-200 hover:bg-primary-200 rounded-full  "
            to="/event"
          >
            More Info
          </Link>
        </div>
      </div>
      <div className="w-full ">
        <img
          src={pics}
          alt="ubl"
          className="w-full mx-auto md:h-[36rem] mt-3"
          loading="lazy"
        />
      </div>
      <Mission />
    </div>
  );
}
