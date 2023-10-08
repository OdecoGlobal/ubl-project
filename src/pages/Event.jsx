import React from "react";
import { useDate } from "../hooks/useDate";
import EventDetails from "../components/EventDetails";
import Agenda from "../components/Agenda";

// assets
import flyer from "../assets/flyernew.jpg";
import dark from "../assets/darkBg.jpg";
import yellow from "../assets/yellow.jpg";
import pulse from "../assets/pulse.jpg";
import chs from "../assets/chs.jpg";
import anam from "../assets/AnamTechies.jpg";
import ubl from "../assets/ubls.jpg";
import crypto from "../assets/cryboot.jpg";
import diamond from "../assets/diamond.jpg";
import flend from "../assets/flend.jpg";
import good from "../assets/good.jpg";
import i4g from "../assets/i4g.jpg";
import jtalks from "../assets/jtalks.jpg";

export default function Event() {
  const { day, hours, mins, secs } = useDate();
  const padDay = day.toString().padStart(2, "0");
  const padHour = hours.toString().padStart(2, "0");
  const padMin = mins.toString().padStart(2, "0");
  const padSecs = secs.toString().padStart(2, "0");

  const sponsors = [
    {
      src: yellow,
      name: "Yellow Card",
    },
    {
      src: pulse,
      name: "Crypto Pulse",
    },
    {
      src: chs,
      name: "CHS Techies",
    },
    {
      src: anam,
      name: "Anambra Techies",
    },
    {
      src: ubl,
      name: "NAU Blockchain",
    },
    {
      src: flend,
      name: "Flend",
    },
    {
      src: jtalks,
      name: "Jtalks",
    },
    {
      src: crypto,
      name: "Crypto Bootcamp",
    },
    {
      src: diamond,
      name: "Diamond",
    },
    {
      src: good,
      name: "Good",
    },
    {
      src: i4g,
      name: "Ingressive for Good",
    },
  ];
  return (
    <div>
      <div>
        <div
          className=" relative px-4 py-3 md:px-7 bg-primary-300"
          style={{
            backgroundImage: `url(${dark})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-primary-200 -z-10 opacity-70"></div>
          <div className="grid grid-cols-1 auto-rows-auto md:grid-cols-2 gap-2 z-30 ">
            <EventDetails />

            <img
              src={flyer}
              alt="event-flyer"
              className=" md:w-[30rem] mx-auto"
              loading="lazy"
            />
          </div>
        </div>
        <div className="bg-white py-3 mx-4 shadow-md grid gap-2 grid-cols-2 md:flex justify-around justify-items-center">
          <p className="date">
            {padDay} <span className="time">Days</span>
          </p>
          <p className="date">
            {padHour} <span className="time">Hours</span>
          </p>
          <p className="date">
            {padMin} <span className="time">Minutes</span>
          </p>
          <p className="date">
            {padSecs} <span className="time">Seconds</span>
          </p>
        </div>
      </div>
      <Agenda />
      <div className="text-center font-semibold text-lg mb-5 border-2 border-red-300 px-10">
        <h2>Sponsors:</h2>
        <div className="flex justify-center flex-wrap gap-5 mt-2">
          {sponsors.map((sponsor) => (
            <img
              src={sponsor.src}
              alt={sponsor.name}
              className=" w-24"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
