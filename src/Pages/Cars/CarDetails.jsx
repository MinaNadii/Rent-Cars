import { useLocation } from "react-router-dom";
import { User, Snowflake, Workflow } from "lucide-react";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";

const carImages = [car1, car2, car3];

const CarDetails = () => {
  const location = useLocation();
  const car = location.state?.car;

  if (!car) return <p className="text-center">Car not found</p>;

  const carIndex = car.id % carImages.length;

  return (
    <section className="myContainer mt-60">
      <div className="bg-white shadow-lg rounded-lg ">
        <img
          src={carImages[carIndex]}
          alt={car.car || "Car"}
          className="h-1/3 object-cover px-10 pb-5 pt-10"
        />

        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">
              {car.car || "Car Name"}
            </h2>
            <p className="text-lg font-semibold text-mainColor">
              ${car.price || "00000"}
            </p>
          </div>

          <div className="flex items-center gap-3 text-gray-600 mt-2">
            <div className="flex items-center gap-1">
              <User size={18} />
              <span>{car.passengers || "N/A"} Passengers</span>
            </div>
            <div className="flex items-center gap-1">
              <Snowflake size={18} />
              <span>{car.airConditioning ? "AC" : "No AC"}</span>
            </div>
            <div className="flex items-center gap-1">
              <Workflow size={18} />
              <span>{car.transmission || "Manual"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
