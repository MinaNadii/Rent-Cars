const Services = ({ props }) => {
  return (
    <div className="flex flex-wrap justify-center mt-20 lg:mt-10 items-center w-full ">
      {props.map((step) => (
        <div
          key={step.id}
          className="flex flex-col items-center w-full md:w-[30%] gap-4 text-center"
        >
          <div className=" p-5 rounded-2xl">
            <img src={step.icon} alt="" className="w-full" />
          </div>
          <h2 className="text-xl font-bold">{step.title}</h2>
          <p className="text-gray-600 px-5 md:w-2/1 ">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
