import { Car } from "./Car.js";

export const raceState = {
  cars: [],
  roundCount: 0,
  setCars: (cars) => {
    raceState.cars = cars;
  },
  setRoundCount: (roundCount) => {
    raceState.roundCount = roundCount;
  },
  allocateCars: () => {
    raceState.cars = raceState.cars.map((item) => {
      return new Car(item);
    });
  },
  clearState: () => {
    raceState.cars = [];
    raceState.roundCount = 0;
  },
  test: () => {
    console.log("ㅎㅇ");
  },
};
