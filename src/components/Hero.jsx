import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="w-full bg-primary-200 h-fit pl-4 py-5 md:pr-5 lg:pr-9">
      <h1 className="text-2xl text-white font-bold md:text-4xl lg:text-5xl">
        We are a Student Organization with the Purpose of Making Blockchain
        Geeks
      </h1>
      <p className="my-3 text-accent-100 text-lg md:text-2xl">
        Connect and Learn from Like Minds
      </p>
      <Link
        className="w-fit flex justify-center items-center py-1 px-3 text-white bg-accent-200 hover:bg-transparent hover:border-2 hover:border-accent-100 rounded-full hover:text-accent-100  "
        to="https://t.me/blockchainNAU"
        target="_blank"
      >
        Join Our Community
      </Link>
    </div>
  );
}

// https://t.me/blockchainNAU
