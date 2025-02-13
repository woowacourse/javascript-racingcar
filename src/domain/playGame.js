import playRound from "./playRound.js";
import { printResultHeader, printRoundScore } from "../view/output.js";

// ['A', 'B', 'C']
// 3

const playGame = (carNames, rounds) => {
  printResultHeader();

  let cars = carNames.map((name) => ({ name, count: 0 }));
  Array.from({ length: rounds }).forEach(() => {
    cars = playRound(cars);
    printRoundScore(cars);
  });

  return cars;
};

export default playGame;
