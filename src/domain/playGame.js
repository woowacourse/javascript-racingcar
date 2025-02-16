import playRound from "./playRound.js";
import { printResultHeader, printRoundScore } from "../view/output.js";

// ['A', 'B', 'C']
// 3

const playGame = (carNames, rounds) => {
  let cars = [];
  for (let name of carNames) {
    cars.push({ name, count: 0 });
  }

  printResultHeader();
  for (let i = 0; i < rounds; i++) {
    const updatedCars = playRound(cars);
    cars = updatedCars;
    // 각 라운드 결과 출력
    printRoundScore(cars);
  }
  return cars;
};

export default playGame;
