import React from "react";
import Logo from "./Logo";
import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.png";

export default function Footer() {
  const connect = [
    {
      src: twitter,
      href: "https://twitter.com/blockchainNAU",
    },
    {
      src: telegram,
      href: "https://t.me/blockchainNAU",
    },
  ];
  return (
    <footer className="bg-slate-900 pb-4">
      <div className=" grid grid-cols-1 md:grid-cols-2 justify-items-center  py-6 px-4 mb-4">
        <div className="w-fit mb-4">
          <Logo />
        </div>
        <div>
          <h1 className="text-white text-center text-xl mb-2">
            Connect With Us
          </h1>
          <div className="flex w-fit mx-auto">
            {connect.map((con, i) => (
              <a
                key={i}
                className="mx-5"
                href={con.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={con.src} alt="logo" className="w-7 filter invert" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center opacity-50 mt-3 text-sm text-white">
        &copy; 2023. Unizik Blockchain Lab{" "}
      </p>
    </footer>
  );
}

// href = "https://t.me/blockchainNAU";
// ;
// ;
