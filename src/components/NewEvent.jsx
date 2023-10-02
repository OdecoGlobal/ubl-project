import React from "react";
import location from "../assets/pin.png";
import calendar from "../assets/calendar.png";
import clock from "../assets/clock.png";
import { Link } from "react-router-dom";

export default function NewEvent() {
  return (
    <div className=" text-white mb-4 px-2 flex-1  py-4">
      <h1 className="text-3xl md:text-4xl  md:mb-6 font-bold text-center ">
        The First Blockchain Event in UNIZIK
      </h1>
      <div className="mb-5">
        <p className="font-script text-4xl text-primary-300">Theme:</p>
        <p className="font-bold text-xl md:text-2xl">
          OPPORTUNITIES IN BLOCKCHAIN AND THE FUTURE OF WEB3
        </p>
      </div>
      <div>
        <div className="flex mb-2 md:mb-6">
          <div className="bg-primary-300 p-1 w-fit rounded-lg mr-3">
            <img src={location} className="w-5 eve-icon" alt="pin" />
          </div>
          <span>
            Chike Okoli Center UNIZIK Main Campus Awka, Anambra State.
          </span>
        </div>
        <div className="flex mb-2 md:mb-6">
          <div className="bg-primary-300 w-fit p-1 rounded-lg mr-3">
            <img src={calendar} alt="date" className="w-5 eve-icon" />
          </div>
          <span>October 21st, 2023</span>
        </div>
        <div className="flex">
          <div className="bg-primary-300 w-fit p-1 rounded-lg mr-3">
            <img src={clock} alt="time" className="w-5 eve-icon" />
          </div>
          <span>9:00 AM (GMT+1)</span>
        </div>
      </div>
      {/* Links */}
      <div className="flex justify-center mt-3">
        <Link
          className="w-fit  mr-4 flex justify-center items-center py-1 px-3 text-white bg-accent-200 hover:bg-transparent hover:border-2 hover:border-white-100 rounded-full  "
          to="https://bit.ly/UBLConference2023"
          target="_blank"
        >
          Register
        </Link>
        <Link
          className="w-fit  flex justify-center items-center py-1 px-3 text-white bg-accent-200 hover:bg-transparent hover:border-2 hover:border-white-100 rounded-full  "
          to="/event"
        >
          More Info
        </Link>
      </div>
    </div>
  );
}
