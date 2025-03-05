import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllCars } from "../../../services/CarAPI";
import HeaderCards from "../../Elements/HeaderCards";
import CarList from "./CarList";
import { MapPin, MoveRight } from "lucide-react";

const CarSection = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getCars = async () => {
      const data = await fetchAllCars();
      setCars(data);
      setLoading(false);
    };
    getCars();
  }, []);

  if (loading) return <p className="text-center">Loading cars...</p>;

  const filteredCars = cars.filter((car) =>
    car.car.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedCars = showAll ? filteredCars : filteredCars.slice(0, 4);

  return (
    <section className="myContainer">
      <header className="flex flex-col gap-3 items-center">
        {/* Search Input */}
        <div className="w-full flex items-center justify-center z-90">
          <div className="flex items-center justify-center border border-gray-300 rounded-lg overflow-hidden shadow-sm w-full">
            <span className="px-3 text-gray-500 border-r-2 border-gray-500">
              <MapPin />
            </span>
            <input
              type="text"
              placeholder="Search by car model"
              className="flex-1 p-2 outline-none text-gray-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 hover:bg-blue-600">
              Search
            </button>
          </div>
        </div>
        <HeaderCards
          h2={"popular rental deals"}
          p={"most popular cars rental deals"}
        />
      </header>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-5">
        {displayedCars.map((car, index) => (
          <CarList key={car.id} car={car} index={index} />
        ))}
      </div>
      <div className="mt-5 w-fit mx-auto">
        <Link
          to="/Cars"
          className="px-10 py-2 flex text-xl justify-center items-center gap-4 border-gray-400 border transition-all duration-400 ease-in-out group w-full text-center text-gray-700 hover:bg-mainColor hover:bg-gray-700 hover:text-white rounded-md"
        >
          Show all vehicles
          <MoveRight
            className="group-hover:translate-x-2 duration-400 ease-in-out text-gray-700 hover:bg-mainColor group-hover:text-white"
            strokeWidth={3}
          />
        </Link>
      </div>
    </section>
  );
};

export default CarSection;
