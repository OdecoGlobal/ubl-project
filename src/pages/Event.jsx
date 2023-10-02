import React from "react";
import { useDate } from "../hooks/useDate";
import EventDetails from "../components/EventDetails";
import Agenda from "../components/Agenda";

// assets
import flyer from "../assets/flyer.png";
import dark from "../assets/darkBg.jpg";
import yellow from "../assets/yellow.jpg";
import pulse from "../assets/pulse.jpg";

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
      <div className="text-center font-semibold text-lg">
        <h2>Sponsors:</h2>
        <div className="flex justify-center flex-wrap mt-2">
          {sponsors.map((sponsor) => (
            <img
              src={sponsor.src}
              alt={sponsor.name}
              className="mr-3 w-24"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
