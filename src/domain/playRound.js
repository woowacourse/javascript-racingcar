import moveCar from "./moveCar.js";
import generateRandomNumber from "../utils/generateRandomNumber.js";

const playRound = (cars) =>
  cars.map((car) => moveCar(car, generateRandomNumber()));

export default playRound;
