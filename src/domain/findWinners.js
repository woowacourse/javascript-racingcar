import playGame from "./playGame.js";

export function displayWinner(cars) {
  const maxAdvanceCount = Math.max(...cars.map((cars) => cars.count));
  const winners = cars.filter((car) => car.count === maxAdvanceCount);

  let winnersName = [];

  for (let winner of winners) {
    winnersName.push(winner.name);
  }
  console.log("우승자: " + winnersName.join(","));
}
