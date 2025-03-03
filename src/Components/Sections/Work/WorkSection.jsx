import React from "react";
import HeaderCards from "../../Elements/HeaderCards";
import Services from "./Services";
import CalenderIcon from "../../../assets/calender-icon.png";
import CarIcon from "../../../assets/car-icon.png";
import PinIcon from "../../../assets/PinIcon.png";
import Clients from "./Clients";
import Logo1 from "../../../assets/Clients/Logo1.png";
import Logo2 from "../../../assets/Clients/Logo2.png";
import Logo3 from "../../../assets/Clients/Logo3.png";
import Logo4 from "../../../assets/Clients/Logo4.png";
import Logo5 from "../../../assets/Clients/Logo5.png";
import Logo6 from "../../../assets/Clients/Logo6.png";

const steps = [
  {
    id: 1,
    icon: PinIcon,
    title: "Choose location",
    description: "Choose your and  find your best car",
  },
  {
    id: 2,
    icon: CalenderIcon,
    title: "Pick-up date",
    description: "Select your pick up date and time to book your car",
  },
  {
    id: 3,
    icon: CarIcon,
    title: "Book your car",
    description: "Book your car and we will deliver it directly to you",
  },
];

const clientsLogo = [
  {
    logo: Logo1,
  },
  {
    logo: Logo2,
  },
  {
    logo: Logo3,
  },
  {
    logo: Logo4,
  },
  {
    logo: Logo5,
  },
  {
    logo: Logo6,
  },
];
const WorkSection = () => {
  return (
    <>
      <section className="myContainer">
        <header className="flex flex-col gap-3 items-center">
          <HeaderCards
            h2={"how it work"}
            p={"Rent with following 3 working steps"}
          />
        </header>

        <Services props={steps} />
        <div className="my-20">
          <Clients clientsLogo={clientsLogo} />
        </div>
      </section>
    </>
  );
};

export default WorkSection;
