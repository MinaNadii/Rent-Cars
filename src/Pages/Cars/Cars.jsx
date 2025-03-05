import { useEffect, useState } from "react";
import { fetchAllCars } from "../../services/CarAPI";
import CarList from "../../Components/Sections/Cars/CarList";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const getCars = async () => {
      const data = await fetchAllCars();
      setCars(data);
      setLoading(false);
    };
    getCars();
  }, []);

  if (loading) return <p className="text-center">Loading all cars...</p>;
  const displayedCars = showAll ? cars : cars.slice(0, 16);
  return (
    <section className="myContainer mt-60">
      <h1 className="text-2xl font-bold text-center mb-6">All Rental Cars</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        {displayedCars.map((car, index) => (
          <CarList key={car.id} car={car} index={index} />
        ))}
      </div>
      {cars.length > 16 && !showAll && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default Cars;
