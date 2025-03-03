import React from "react";

const ServicesCards = ({ props }) => {
  return (
    <>
      <div className="w-full">
        {props.map((card, index) => (
          <div
            key={index}
            className=" flex justify-start items-center w-full  gap-4 p-4 "
          >
            <img src={card.icon} alt="" className="" />

            <div className="w-full">
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesCards;
