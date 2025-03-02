import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllCars } from "../../../services/CarAPI";
import HeaderCards from "../../Elements/HeaderCards";
import InputSearch from "./InputSearch";
import CarList from "./CarList";
import Cars from "../../../Pages/Cars/Cars";
import { MoveRight } from "lucide-react";

const CarSection = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [showAll, setShowAll] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const carsPerPage = 16; // Change this to your preferred pagination count
  useEffect(() => {
    const getCars = async () => {
      const data = await fetchAllCars();
      setCars(data);
      setLoading(false);
    };
    getCars();
  }, []);

  if (loading) return <p className="text-center">Loading cars...</p>;

  // // Pagination Logic
  // const indexOfLastCar = currentPage * carsPerPage;
  // const indexOfFirstCar = indexOfLastCar - carsPerPage;
  // const paginatedCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  // // Show only first 4 cars if not showing all
  // const displayedCars = showAll ? paginatedCars : cars.slice(0, 4);

  return (
    <>
      <section className="myContainer">
        <header className="flex flex-col gap-3 items-center">
          <InputSearch />
          <HeaderCards
            h2={"popular rental deals"}
            p={"most popular cars rental deals"}
          />
        </header>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-5">
          <CarList />
          <CarList />
          <CarList />
          <CarList />
        </div>
        <div className="mt-5   w-fit mx-auto">
          <Link
            to="/Cars"
            className="px-10 py-2 flex text-xl justify-center items-center gap-4 border-gray-400 border  transition-all  duration-400 ease-in-out group w-full text-center text-gray-700 hover:bg-mainColor hover:bg-gray-700 hover:text-white rounded-md"
          >
            Show all vehicles
            <MoveRight
              className="group-hover:translate-x-2 duration-400 ease-in-out  text-gray-700 hover:bg-mainColor  group-hover:text-white"
              hoverColor="white"
              strokeWidth={3}
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default CarSection;
