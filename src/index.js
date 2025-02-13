import Output from "./Output.js";
import Input from "./Input.js";
import Race from "./Race.js";

const input = new Input();
const output = new Output();

async function run() {
  const names = await input.raceCarNames();
  const count = await input.raceCount();

  const race = new Race(names, count);
  race.raceCar();
  const winnerList = race.getWinner();

  output.printWinnerList(winnerList);
}

run();
