import { Car } from "./Car.js";

export const state = {
  cars: [],
  racingNumber: 0,
};

export function setCarNames(carNames) {
  state.cars = carNames;
}

export function setRound(racingNumber) {
  state.racingNumber = racingNumber;
}

export function allocateCars() {
  state.cars = state.cars.map((item) => {
    return new Car(item);
  });
}

export function clearState() {
  state.cars = [];
  state.racingNumber = 0;
}
