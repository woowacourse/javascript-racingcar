import Output from "./view/Output.js";
import Input from "./view/Input.js";
import Race from "./domain/Race.js";
import { OUTPUT_MESSAGE } from "./const.js";
import RaceRecord from "./domain/RaceRecord.js";

const input = new Input();
const output = new Output();

async function run() {
  const raceCarNames = await input.raceCarNames();
  const raceCount = await input.raceCount();
  const raceRecord = new RaceRecord(raceCarNames);

  const race = new Race(raceCarNames, raceCount, raceRecord);
  race.raceCar();
  const winnerList = race.getWinner();

  output.printLine(OUTPUT_MESSAGE.result);
  output.printRace(raceRecord, raceCount);
  output.printWinnerList(winnerList);
}

run();
