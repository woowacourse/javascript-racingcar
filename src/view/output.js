import { OUTPUT } from "../constants/messages.js";
export const print = (str) => {
  return console.log(str);
};

export const printProcess = (cars) => {
  cars.forEach((car) => {
    console.log(`${car.name} :  ${"-".repeat(car.position)}`);
  });
  console.log("");
};

export const printWinners = (winners) => {
  console.log(
    `${OUTPUT.FINAL_WINNER} ${winners.map((winner) => winner.name).join(", ")}`
  );
};
