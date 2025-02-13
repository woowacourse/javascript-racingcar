import Console from "../utils/Console.js";

const Output = {
  printRaceStart() {
    Console.print("\n실행 결과");
  },
  printRace(name, count) {
    Console.print(`${name} : ${"-".repeat(count)}`);
  },
  printWinner(winners) {
    Console.print(`최종 우승자: ${winners.join(", ")}`);
  },
};

export default Output;
