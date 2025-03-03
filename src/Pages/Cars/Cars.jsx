import { useEffect, useState } from "react";
import { fetchAllCars } from "../../services/CarAPI";
import CarList from "../../Components/Sections/Cars/CarList"; 

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCars = async () => {
      const data = await fetchAllCars();
      setCars(data);
    };
    getCars();
  }, []);

  if (loading) return <p className="text-center">Loading all cars...</p>;

  return (
    <section className="myContainer mt-60">
      <h1 className="text-2xl font-bold text-center mb-6">All Rental Cars</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        {cars.map((car, index) => (
          <CarList key={car.id} car={car} index={index} /> // ✅ Show all cars
        ))}
      </div>
    </section>
  );
};

export default Cars;
