import { getRandomNumber } from "../util.js";

const outputView = {
  printGameResult(gameCount, cars) {
    console.log("\n실행 결과");
    for (let count = 0; count < gameCount; count += 1) {
      cars.forEach((car) => {
        const randomNumber = getRandomNumber();
        car.move(randomNumber);
        console.log(`${car.name} : ${"-".repeat(car.position)}`);
      });
      console.log("");
    }
  },
  printWinners(cars) {
    const carPositions = cars.map((car) => car.position);
    const winnerPosition = Math.max(...carPositions);
    const winners = cars
      .filter((car) => car.position === winnerPosition)
      .map((car) => car.name)
      .join(", ");
    console.log(`최종 우승자: ${winners}`);
  },
};

export default outputView;
