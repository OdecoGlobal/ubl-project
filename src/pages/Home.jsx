import { Link } from "react-router-dom";
import React from "react";

// Components
import Hero from "../components/Hero";
// assets
import flyer from "../assets/flyer.png";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-3 mx-5 pb-1 px-4 md:px-7 bg-primary-200 shadow-2xl">
        <h1 className="text-center my-4 text-white text-2xl font-bold">
          UPCOMING EVENTS
        </h1>

        <div>
          <img
            src={flyer}
            alt="event-flyer"
            loading="lazy"
            className=" md:w-[30rem] mx-auto"
          />

          {/* Links */}
          <div className="flex justify-center my-3">
            <Link
              className="w-fit  mr-4 flex justify-center items-center py-1 px-3 text-xl text-white bg-accent-200 hover:bg-transparent hover:border-2 hover:border-white-100 rounded-full  "
              to="https://bit.ly/UBLConference2023"
              target="_blank"
            >
              Register
            </Link>
            <Link
              className="w-fit  flex justify-center items-center py-1 px-3 text-xl text-white bg-accent-200 hover:bg-transparent hover:border-2 hover:border-white-100 rounded-full  "
              to="/event"
            >
              More Info
            </Link>
          </div>
          {/* <NewEvent /> */}
        </div>
      </div>
    </div>
  );
}
