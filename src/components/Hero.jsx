import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// assets
import bgPics from "../assets/photo.jpg";
import bgPics2 from "../assets/photos.jpg";
import zik from "../assets/unizik.jpg";
import flyer from "../assets/flyernew.jpg";

export default function Hero() {
  const [newSlide, setSlide] = useState(0);

  const slides = [
    {
      type: "main",
      src: zik,
      detail:
        "We are a Student Organization with the Purpose of Making Blockchain Geeks",
      sub: "Connect and Learn from Like Minds",
      link: "Join Our Community",
    },
    {
      type: "mission",
      src: bgPics2,
      title: "Aim & Objectives",
      detail:
        "To lead, inspire, and empower the next generation of innovators, entrepreneurs, and blockchain enthusiasts at Nnamdi Azikiwe University and beyond, fostering a future where blockchain technology drives transformative change in education, industry, and society.",
      link: "Join Our Community",
    },
    {
      type: "event",
      src: flyer,
      link: "More Info",
    },
  ];

  useEffect(() => {
    const currentSlide = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => {
      clearInterval(currentSlide);
    };
  }, [newSlide]);

  return (
    <section className="relative w-full flex h-72 md:h-[24rem]  overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`w-full h-full absolute top-0 left-0 transition-transform duration-500  ease-linear ${
            i === newSlide
              ? "transform-none block"
              : "transform translate-x-full hidden"
          }`}
          style={{
            backgroundImage: `url(${slide.src})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute top-0 left-0 bg-slate-900 h-full w-full opacity-40"></div>
          <div className=" absolute top-0 left-0 w-full h-full z-10 pl-4 py-5 md:pr-5 lg:pr-9">
            {slide.type === "main" && (
              <div className="w-full h-full flex flex-col justify-center px-3">
                <h1 className="text-2xl text-white font-bold md:text-4xl lg:text-5xl">
                  {slide.detail}
                </h1>
                <p className="my-3 text-accent-100 text-lg md:text-2xl">
                  {slide.sub}
                </p>
                <a
                  className="w-fit flex justify-center items-center py-2 px-4 mx-auto text-white bg-accent-200 md:text-2xl hover:bg-primary-200 rounded-full "
                  href="https://t.me/blockchainNAU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {slide.link}
                </a>
              </div>
            )}
            {slide.type === "mission" && (
              <div className=" w-full h-full flex justify-center items-center flex-col">
                <h1 className="text-4xl w-fit text-accent-200 font-black">
                  {slide.title}
                </h1>
                <p className="my-3 text-white text-lg md:text-2xl">
                  {slide.detail}
                </p>
              </div>
            )}
            {slide.type === "event" && (
              <div className="w-full h-full flex flex-col justify-end items-center">
                <Link
                  to="/event"
                  className="w-fit flex justify-center items-center py-2 px-5 text-2xl text-white bg-accent-200 hover:bg-primary-200 rounded-full   "
                >
                  More Info
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

// https://t.me/blockchainNAU
