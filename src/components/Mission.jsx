import React from "react";

export default function Mission() {
  const missions = [
    {
      title: "Education",
      detail:
        "We are committed to providing a comprehensive and accessible platform for students to explore, learn, and master blockchain technology. We aim to demystify blockchain's complexities and promote its practical applications through workshops, hackathons, conferences, and other collaborative learning experiences",
    },
    {
      title: "Connection",
      detail:
        "We bridge the gap between academia and industry by facilitating meaningful connections between our talented student body and blockchain-related companies, startups, and thought leaders. Through networking events, internships, and partnerships, we empower students to explore real-world opportunities in the blockchain space",
    },
    {
      title: "Adoption",
      detail:
        "We are passionate advocates for the widespread adoption of blockchain technology. Through research, advocacy, and community engagement, we work to advance the understanding and integration of blockchain solutions across various sectors, driving innovation and creating value for our university, community, and beyond",
    },
  ];
  return (
    <div className="w-full px-3 bg-primary-200 py-4">
      <h1 className="text-center text-2xl md:text-3xl text-white font-bold">
        At BlockchainNAU, Our Mission is Threefold:
      </h1>
      {missions.map((mission, i) => (
        <div
          key={i}
          className="border-2 border-white mx-2 mt-3 rounded-lg px-3 py-3 hover:border-none text-white hover:bg-accent-200 hover:shadow-lg  "
        >
          <h1 className=" text-3xl text-center  font-bold">{mission.title}</h1>
          <p className="text-lg">{mission.detail}</p>
        </div>
      ))}
    </div>
  );
}
