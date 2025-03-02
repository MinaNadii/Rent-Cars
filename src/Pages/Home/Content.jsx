import ios from "../../assets/ios.png";
import andriod from "../../assets/andriod.png";

const Content = () => {
  return (
    <div className="text-center lg:w-3/4  lg:text-start lg:px-10 max-lg:mt-50 z-20">
      <h2 className="text-4xl header-text pb-5 mt-20 font-bold">
        Find, book and rent a car
        <span className="text-mainColor ml-2 span-hero">Easily</span>
      </h2>

      <p className="text-gray-500 font-medium text-center lg:text-start text-lg lg:w-1/2">
        Get a car wherever and whenever you need it with your IOS and Android
        device.
      </p>

      <div className="flex justify-center lg:justify-start gap-5 mt-5">
        <img src={ios} alt="ios" className="w-28" />
        <img src={andriod} alt="andriod" className="w-28" />
      </div>
    </div>
  );
};

export default Content;
