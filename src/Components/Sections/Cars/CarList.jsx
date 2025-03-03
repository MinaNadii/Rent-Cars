import { Link } from "react-router-dom";
import car1 from "../../../assets/car1.png";
import car2 from "../../../assets/car2.png";
import car3 from "../../../assets/car3.png";
import {
  CalendarX,
  MoveRight,
  Snowflake,
  Star,
  User,
  Workflow,
} from "lucide-react";

const carImages = [car1, car2, car3];

const CarList = ({ car, index }) => {
  return (
    <>
      <div className=" w-full h-full border-1 border-gray-500/50 rounded-md">
        <div className="flex justify-center">
          <img
            src={carImages[index % carImages.length]} // ✅ Fix image access
            alt={car.name || "Car"}
            className="h-1/3  object-cover px-10 pb-5 pt-10"
          />
        </div>

        <div className="flex flex-col items-start p-3 text-gray-700">
          <div className="flex gap-2 px-3 items-center justify-between w-full">
            <h1 className="text-start font-bold">{car.car}</h1>
            <div className="flex items-center gap-2">
              <Star size={20} color="#facc15" fill="#facc15" />
              <span>(999 Review)</span>
            </div>
          </div>
          <div className="px-3 py-5 border-b-1 border-gray-500/50 flex justify-between flex-wrap gap-2">
            <div className="flex gap-2 px-3 items-center">
              <User />
              <span>4 Passengers</span>
            </div>
            <div className="flex gap-2 px-3 items-center">
              <Snowflake />
              <span>Air conditioning</span>
            </div>
            <div className="flex gap-2 px-3 items-center">
              <CalendarX />
              <span>4 Passengers</span>
            </div>
            <div className="flex gap-2 px-3 items-center">
              <Workflow />
              <span>Automatic</span>
            </div>
          </div>

          <div className="flex w-full p-3  items-center justify-between">
            <p>Price</p>
            <p>{car.price}/day</p>
          </div>

          <Link
            state={{ car }}
            to={`/cars/${car.id}`}
            className="px-3 py-2 flex  justify-center items-center gap-4 bg-mainColor transition-all  duration-400 ease-in-out group w-full text-center text-white rounded-lg"
          >
            View Details
            <MoveRight className="group-hover:translate-x-2 duration-400 ease-in-out" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CarList;
