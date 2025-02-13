import { raceInit, raceManager } from "./service/raceService.js";
import { OutputView } from "./view/OutputView.js";

const { cars, round } = await raceInit();
raceManager.startRace(cars, round);

const maxPosition = Math.max(...cars.map((car) => car.position));

const winner = cars
  .filter((car) => car.position === maxPosition)
  .map((car) => car.name)
  .join(", ");
//

OutputView.printMessage(`최종 우승자: ${winner}`);
