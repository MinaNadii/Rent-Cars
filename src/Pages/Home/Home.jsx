import Framebg from "../../assets/Frame.png";
import HeroCar from "../../assets/HeroCar.png";
import CarsCards from "../../Components/Sections/Cars/CarSection";
import Experience from "../../Components/Sections/Experience/Experience";
import Work from "../../Components/Sections/Work/WorkSection";
import Conntent from "./Content";

const Home = () => {
  return (
    <>
      <div className="absolute top-0 left-0 h-3/4 w-full z-0">
        <div
          className="h-full w-full bg-no-repeat bg-contain bg-[position:0_0] sm:bg-[position:top_right] relative flex justify-center items-center lg:justify-start z-0"
          style={{ backgroundImage: `url(${Framebg})` }}
        >
          <img
            src={HeroCar}
            alt="Blue Car"
            className="absolute top-1/4 right-0 flex flex-col gap-4 max-lg:w-3/4 "
          />
          {/* Hero Content  */}
          <Conntent />
        </div>
      </div>

      {/* Cars Search and Cards */}
      <div className=" mt-[50rem] w-full z-[9999]">
        <CarsCards />
      </div>
      {/* About Section */}
      <div className=" mt-[3rem] w-full ">
        <Work />
      </div>
      {/* Experience Section */}
      <div className=" mt-[3rem] w-full ">
        <Experience />
      </div>
    </>
  );
};

export default Home;
