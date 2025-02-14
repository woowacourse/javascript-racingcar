import Car from "../domain/Car.js";
import { OutputView } from "../view/OutputView.js";
import randomNumberGenerator from "../domain/RandomNumberGenerator.js";
import { systemSetting } from "../settings/systemSetting.js";
import { getCarStatus } from "../util/carUtil.js";

export async function raceInit(inputProvider, parser) {
  const cars = [];

  const carNames = await parser.parseInput(
    inputProvider.getCarName,
    parser.parseNames
  );
  const round = await parser.parseInput(
    inputProvider.getRound,
    parser.parseRound
  );

  carNames.forEach((carName) => cars.push(new Car(carName)));

  return { cars, round };
}

export function isMovable(randomNumber) {
  return randomNumber >= systemSetting.MOVABLE_NUMBER;
}

export function moveCar(cars) {
  cars.forEach((car) => {
    const randomNumber = randomNumberGenerator(
      systemSetting.MINIMUM_RANDOM_NUMBER,
      systemSetting.MAXIMUM_RANDOM_NUMBER
    );
    if (isMovable(randomNumber)) {
      car.goForward();
    }
    const carStatus = getCarStatus(car);
    OutputView.printMessage(carStatus);
  });
}

export function startRace(cars, round) {
  for (let i = 0; i < round; i++) {
    moveCar(cars);
    OutputView.printMessage("\n");
  }
  return cars;
}
