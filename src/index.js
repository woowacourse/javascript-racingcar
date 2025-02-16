import Output from "./ui/Output.js";
import Input from "./ui/Input.js";
import Race from "./domain/Race.js";

const input = new Input();
const output = new Output();

async function run() {
  const raceCarNames = await input.raceCarNames();
  const raceCount = await input.raceCount();

  const race = new Race(raceCarNames, raceCount);
  race.raceCar();
  const moveResult = race.getMoveResult();
  const winnerList = race.getWinner();

  output.printResult(moveResult, winnerList);
}

run();
