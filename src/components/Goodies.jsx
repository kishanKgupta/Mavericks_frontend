import React from "react";

const Goodies = () => {
  const services = [
    {
      id: 1,
      url: "/image/goodies/img1.png",
      title: "Techno T-shirt",
      description: "",
    },
    {
      id: 2,
      url: "/image/goodies/img2.png",
      title: "Techno Hoodie",
    },
    {
      id: 3,
      url: "/image/goodies/img3.png",
      title: "Techno Bag",
    },
  ];
  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-black to-slate-600 gap-4 p-10 m-10">
        <h2 className="text-white text-center font-bold text-3xl mt-5 mb-7" name="goodies">
          OUR MERCHANDISE
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {services.map((element) => {
            return (
              <div
                className="text-white border border-solid border-white"
                key={element.id}
              >
                <img src={element.url} alt={element.title} className="h-52" />
                <div className="flex justify-center py-2">
                  <h3>{element.title}</h3>
                </div>
                <div className="flex justify-center bg-gradient-to-r from-blue-700 to-cyan-400">
                  <button>Buy Now</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Goodies;
