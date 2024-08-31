import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/image/events/img1.jpg",
      title: "Dancing",
    },
    {
      id: 2,
      url: "/image/events/img2.jpg",
      title: "Singing",
    },
    {
      id: 3,
      url: "/image/events/img3.jpg",
      title: "Tamboola",
    },
    {
      id: 4,
      url: "/image/events/img4.jpg",
      title: "Carrom",
    },
    {
      id: 5,
      url: "/image/events/img5.jpg",
      title: "Poetry",
    },
    {
      id: 6,
      url: "/image/events/img3.jpg",
      title: "Solo Singing",
    },
  ];

  return (
    <div
      name="services"
      className="flex flex-col bg-gradient-to-b from-black to-slate-600 gap-4 p-10 mx-10 my-0"
    >
      <h2 className="text-white text-center font-bold text-3xl mt-5 mb-7">
        EVENTS
      </h2>
      <div className="flex flex-wrap justify-center gap-12 items-center">
        {services.map((element) => {
          return (
            <div
              className="text-white border border-solid border-white"
              key={`${element.id}-${element.title}`}
            >
              <img
                src={element.url}
                alt={element.title}
                className="h-56 w-52"
              />
              <div className="flex justify-center p-2">
                <h3>{element.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
