import playRound from "./playRound.js";
import { printResultHeader, printRoundScore } from "../view/output.js";
import { pipe } from "../utils/pipe.js";

const initializeCars = (carNames) =>
  carNames.map((name) => ({ name, count: 0 }));

const runRounds = (rounds) => (cars) =>
  Array.from({ length: rounds }).reduce((updatedCars, _) => {
    const newCars = playRound(updatedCars);
    printRoundScore(newCars);
    return newCars;
  }, cars);

const playGame = (carNames, rounds) => {
  printResultHeader();

  return pipe(initializeCars, runRounds(rounds))(carNames);
};

export default playGame;
