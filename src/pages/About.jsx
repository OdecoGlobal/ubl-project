import React from "react";
import notFound from "../assets/404.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="px-4">
      <img
        src={notFound}
        alt="404 error"
        loading="lazy"
        className="object-cover w-full"
      />
      <p className="text-center text-xl">This Page is Not Available Now</p>
      <p className="text-center  text-xl mt-4">
        Go Back to{" "}
        <Link to="/" className="text-blue-500">
          Home
        </Link>{" "}
      </p>
    </section>
  );
}
