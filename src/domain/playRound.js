import moveCar from "./moveCar.js";
import generateRandomNumber from "../utils/generateRandomNumber.js";

// [
//   { name: "A", count: 1 },
//   { name: "B", count: 1 },
//   { name: "C", count: 0 }
// ];

const playRound = (cars) => {
  const updatedCars = cars.map((car) => {
    const randomNumber = generateRandomNumber();
    return moveCar(car, randomNumber);
  });
  return updatedCars;
};

export default playRound;
