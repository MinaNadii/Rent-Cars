const API_URL = "https://myfakeapi.com/api/cars";

export const fetchAllCars = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.cars;
};

export const fetchCarById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data.Car;
};
