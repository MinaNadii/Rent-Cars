import { MapPin } from "lucide-react";

const InputSearch = () => {
  return (
    <>
      <div className="myContainer flex items-center justify-center z-90">
        <div className="flex items-center justify-center border border-gray-300 rounded-lg overflow-hidden shadow-sm w-full ">
          <span className="px-3 text-gray-500 border-r-2 border-gray-500 ">
            <MapPin />
          </span>
          <input
            type="text"
            placeholder="Search by car model"
            className="flex-1 p-2 outline-none text-gray-700"
          />
          <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default InputSearch;
