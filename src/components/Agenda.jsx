import React from "react";

export default function Agenda() {
  const agendas = [
    {
      time: "9:00 AM",
      title: "Registration and Networking",
      details: [
        "Attendees arrive and check-in at the registration desk.",
        "Opportunity to network with fellow blockchain enthusiasts, developers, and industry experts.",
      ],
    },
    {
      time: "10:00 AM",
      title: "Opening Ceremony",
      details: [
        "Welcome address by the event organizers( co founders).",
        "Introduction to the theme and objectives of the event.",
      ],
    },
    {
      time: "10:30 AM",
      title: "Keynote Session",
      details: [
        "Renowned blockchain expert delivers a keynote speech.",
        "Advancements, trends, and potential applications of blockchain technology.",
      ],
    },

    {
      time: "12:00 PM",
      title: "Panel Discussion",
      details: [
        "Blockchain impact in AI and Industries and its effect on Students.",
        "Panel discussion featuring industry leaders and experts.",
        "Exploration of real-world use cases and the impact of blockchain across various sectors",
        "Q&A session with the audience.",
      ],
    },
    {
      time: "1:00 PM",
      title: "Networking Break",
      details: [
        "Refreshment Served",
        "Opportunity to interact with sponsors, exhibitors, and fellow attendees",
      ],
    },
    {
      time: "2:00 PM",
      title: "Blockchain Workshops",
      details: [
        "Concurrent workshops on different blockchain topics.",
        "Hands-on sessions to learn about blockchain development, smart contracts, decentralized applications (dApps), etc",
        "Closing remark by the founders/Team.",
      ],
    },
  ];
  return (
    <section className="my-3">
      <h3 className="text-2xl uppercase font-bold text-center ">
        Agenda for UBLC
      </h3>

      <div className="m-2 p-3">
        {agendas.map((agenda) => (
          <div className="bg-white shadow-md px-3 pb-5 pt-3 mb-2">
            <p className="py-5 bg-primary-200 shadow-slate-800 rounded-lg shadow-md border-primary-200 text-center text-2xl font-medium mb-3">
              {agenda.time}
            </p>
            <p className="py-5 text-black  bg-accent-200 shadow-slate-800 rounded-lg shadow-md  text-center text-2xl font-medium mb-3">
              {agenda.title}
            </p>
            <ul className="bg-white text-black font-medium shadow-slate-800 shadow-lg text-lg md:text-xl list-disc list-inside rounded-lg py-2 pl-3 pr-1">
              {agenda.details.map((detail) => (
                <li className="mb-2">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
