import { useLocation } from "react-router-dom";
import { User, Snowflake, Workflow, Car, PaintBucket } from "lucide-react";
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
    <section className="py-8 px-4 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-3xl w-full">
        {/* Image Header with Flexbox Overlay */}
        <div className="relative w-full h-72 md:h-80 flex items-end">
          <img
            src={carImages[carIndex]}
            alt={car.car || "Car"}
            className="w-full h-full object-contain p-10"
          />
        </div>

        {/* Details Section */}
        <div className="p-6 md:p-8">
          <div className="flex justify-between w-full ">
            <h1 className="text-black text-lg md:text-2xl font-bold">
              {car.car || "Car Name"} - {car.car_model || "Model"}
            </h1>
            <p className="text-lg md:text-2xl font-semibold text-mainColor">
              {car.price || "00000"}/day
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <User size={20} />
                <span>{car.passengers || "4"} Passengers</span>
              </div>
              <div className="flex items-center gap-2">
                <Snowflake size={20} />
                <span>{car.airConditioning ? "AC" : "No AC"}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <Workflow size={20} />
              <span>{car.transmission || "Manual"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Car
                size={20}
                style={{ color: car.availability ? "green" : "red" }}
              />
              <span
                className={car.availability ? "text-green-600" : "text-red-600"}
              >
                {car.availability ? "Available" : "Not Available"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <PaintBucket
                size={20}
                style={{ color: car.car_color ? car.car_color : "#000" }}
              />
              <span style={{ color: car.car_color ? car.car_color : "#000" }}>
                {car.car_color || "Color not found"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
