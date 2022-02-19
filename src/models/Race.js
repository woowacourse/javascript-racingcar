import { Car } from "./Car.js";

export const raceState = {
  cars: [],
  roundCount: 0,
};

export function setCars(cars) {
  raceState.cars = cars;
}

export function setRoundCount(roundCount) {
  raceState.roundCount = roundCount;
}

export function allocateCars() {
  raceState.cars = raceState.cars.map((item) => {
    return new Car(item);
  });
}

export function clearState() {
  raceState.cars = [];
  raceState.roundCount = 0;
}
