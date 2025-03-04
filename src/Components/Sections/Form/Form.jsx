const Form = () => {
  return (
    <>
      <div className="flex  ">
        <div className="lg:w-1/2  lg:pl-50">
          <form action="">
            <div className=" flex flex-col  gap-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full p-3 bg-[#CEDCFF] border border-gray-300 rounded-3xl"
              />
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full p-3 bg-[#CEDCFF] border border-gray-300 rounded-3xl"
              />
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full bg-[#CEDCFF] p-3 border border-gray-300 rounded-3xl"
              />
              <button className=" bg-mainColor text-white p-3 rounded-lg">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Form;
