import { InputView } from "./view/InputView.js";
import { parsingService } from "./Service/parsingService.js";
import Car from "./model/Car.js";
import { raceService } from "./service/raceService.js";
import { OutputView } from "./view/OutputView.js";
const cars = [];

function printError(parser, input) {
  let parsedValue;
  try {
    parsedValue = parser(input);
  } catch (error) {
    console.error(error.message);
  }
  return parsedValue;
}

async function parseInput(getInput, parser) {
  while (true) {
    const input = await getInput();
    let parsedInput = printError(parser, input);
    if (parsedInput) return parsedInput;
  }
}

const carNames = await parseInput(
  InputView.getCarName,
  parsingService.parseNames
);
const round = await parseInput(InputView.getRound, parsingService.parseRound);
OutputView.printMessage("");
for (const carName of carNames) {
  cars.push(new Car(carName));
}

raceService.moveCar(cars, round);

const maxPosition = Math.max(...cars.map((car) => car.position));

const winner = cars
  .filter((car) => car.position === maxPosition)
  .map((car) => car.name)
  .join(", ");

OutputView.printMessage(`최종 우승자: ${winner}`);
