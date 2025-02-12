import { getRacingCarResult } from "./raceState.js";
import { randomNumberGenerator } from "./utils/math.js";
import { RULE } from "./constants/index.js";

const advanceRacingCar = (racingCar, carName) => {
  racingCar[carName] += 1;
};

const moveRacingCars = (carNames, racingCar) => {
  carNames.forEach((carName) => {
    const randomNumber = randomNumberGenerator(
      RULE.MIN_RANDOM_NUMBER,
      RULE.MAX_RANDOM_NUMBER
    );

    if (randomNumber >= RULE.ADVANCE_CONDITION) {
      advanceRacingCar(racingCar, carName);
    }
  });
};

export const startRace = (attemptCount, racingCar) => {
  const snapShots = [];

  const carNames = Object.keys(racingCar);
  for (let i = 0; i < attemptCount; i++) {
    moveRacingCars(carNames, racingCar);
    // 이 시점의 전진 결과를 스냅샷에 저장(출력 용도)
    snapShots.push(getRacingCarResult(racingCar));
  }

  return snapShots;
};
