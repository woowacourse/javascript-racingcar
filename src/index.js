import { readLineAsync } from "./Util.js";
import Validate from "./Validate.js";
import Car from "./Car.js";
import Output from "./Output.js";
import Input from "./Input.js";
import Race from "./Race.js";

// 입출력 예시
async function run() {
  const input = new Input();
  const output = new Output();

  const names = await input.raceCarNames();
  const count = await input.raceCount();

  const race = new Race(names, count);

  race.raceCar();
  const winnerList = race.getWinner();

  console.log(`최종 우승자: ${winnerList.join(", ")}`);
}

run();
