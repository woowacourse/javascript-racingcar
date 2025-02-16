export const printResultHeader = () => {
  console.log("\n실행 결과");
};

export const printRoundScore = (cars) => {
  for (let car of cars) {
    console.log(`${car.name}: ${"-".repeat(car.count)}`);
  }
  console.log("\n");
};

export const printWinners = (winnersName) => {
  console.log("우승자: " + winnersName.join(","));
};
