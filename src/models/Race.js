import { Car } from "./Car.js";

export const raceState = {
  cars: [],
  racingNumber: 0,
};

export function setCarNames(carNames) {
  raceState.cars = carNames;
}

export function setRound(racingNumber) {
  raceState.racingNumber = racingNumber;
}

export function allocateCars() {
  raceState.cars = raceState.cars.map((item) => {
    return new Car(item);
  });
}

export function clearState() {
  raceState.cars = [];
  raceState.racingNumber = 0;
}
