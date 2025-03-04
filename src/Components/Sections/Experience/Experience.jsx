import HeaderCards from "../../Elements/HeaderCards";
import Icon1 from "../../../assets/Experience/ChatIcon.png";
import Icon2 from "../../../assets/Experience/HourIcon.png";
import Icon3 from "../../../assets/Experience/MoneyIcon.png";
import Icon4 from "../../../assets/Experience/PersonIcon.png";
import ServicesCards from "./ServicesCards";
import bgImg from "../../../assets/Experience/Vector.png";
import Car from "../../../assets/Experience/Audi 1.png";

const servies = [
  {
    id: 1,
    icon: Icon1,
    title: "Best price guaranteed",
    description: "Find a lower price? We’ll refund you 100% of the difference.",
  },
  {
    id: 2,
    icon: Icon2,
    title: "24 hour car delivery",
    description:
      "Book your car anytime and we will deliver it directly to you.",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Best price guaranteed",
    description: "Find a lower price? We’ll refund you 100% of the difference.",
  },
  {
    id: 4,
    icon: Icon4,
    title: "24/7 technical support",
    description:
      "Have a question? Contact Rentcars support any time when you have problem",
  },
];
const Experience = () => {
  return (
    <>
      <section className="">
        <header className="flex flex-col gap-3 px-4 text-center items-center">
          <HeaderCards
            h2={"why choose us"}
            p={"We offer the best experience with our rental deals"}
          />
        </header>
        <div
          className="flex fkex-wrap justify-center items-center w-full h-full "
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: "center left ",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
          }}
        >
          <div className="max-md:hidden md:w-1/2">
            <img src={Car} alt="Car" />
          </div>
          <div className="md:w-1/2 w-full">
            <ServicesCards props={servies} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
