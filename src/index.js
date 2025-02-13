import Output from "./ui/Output.js";
import Input from "./ui/Input.js";
import Race from "./domain/Race.js";

const input = new Input();
const output = new Output();

async function run() {
  const names = await input.carNames();
  const count = await input.raceCount();

  const race = new Race(names, count);
  race.raceCar();
  const winnerList = race.getWinner();

  output.printWinnerList(winnerList);
}

run();
