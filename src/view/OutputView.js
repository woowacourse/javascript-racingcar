import MESSAGE from "../constants/Message.js";

export const printCar = (car) => {
  console.log(MESSAGE.printCarInfo(car));
};

export const printQuery = (string) => {
  console.log(string);
};

export const printAttemptTitle = () => {
  console.log(MESSAGE.printAttemptTitle);
};

export const printChampions = (names) => {
  console.log(`${MESSAGE.printChampionTitle}: ${names}`);
};

export const printNewLine = () => {
  console.log("");
};
