import Iphone from "../../../assets/iphone.png";
import ios from "../../../assets/ios.png";
import andriod from "../../../assets/andriod.png";

const Form = () => {
  return (
    <>
      <div className=" px-5">
        <div className="flex flex-warp max-md:flex-col gap-4 justify-items-stretch lg:justify-evenly justify-around items-center  ">
          <div className="lg:w-1/4 w-full md:w-1/2">
            <form action="">
              <div className=" flex flex-col  gap-4">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full p-3 bg-[#CEDCFF]  border border-gray-300 rounded-3xl"
                />
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full p-3 bg-[#CEDCFF] border border-gray-300 rounded-3xl"
                />
                <input
                  type="text"
                  placeholder="Enter your Phone"
                  className="w-full bg-[#CEDCFF] p-3 border border-gray-300 rounded-3xl"
                />
                <button className=" bg-mainColor text-white p-3 rounded-lg">
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex gap-4 mt-4 justify-center">
              <img src={ios} alt="" />
              <img src={andriod} alt="" />
            </div>
          </div>
          <div className="flex justify-center text-center  ">
            <img src={Iphone} alt="Iphone" className="w-[400px] " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
