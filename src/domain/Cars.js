import ERROR_MESSAGE from "../error/message.js";
import Car from "./Car.js";
import createRandom from "../utils/createRandom.js";

const SEPARATOR = ",";
const MIN_RANDOM_RANGE = 0;
const MAX_RANDOM_RANGE = 9;

class Cars {
  #cars;

  constructor(names) {
    const parsedNames = names.split(SEPARATOR).map((name) => name.trim());

    this.#validate(parsedNames);

    this.#cars = parsedNames.map((name) => new Car(name));
  }

  #validate(names) {
    const uniqueNames = new Set(names);

    if (uniqueNames.size !== names.length) {
      throw new Error(`${ERROR_MESSAGE.duplicated} ${ERROR_MESSAGE.retry}`);
    }
  }

  play() {
    this.#cars.forEach((car) => {
      const randomNumber = createRandom(MIN_RANDOM_RANGE, MAX_RANDOM_RANGE);
      car.forward(randomNumber);
    });

    return this.#cars.map((car) => ({
      name: car.getName(),
      location: car.getLocation(),
    }));
  }

  winners() {
    const maxLocation = Math.max(...this.#cars.map((car) => car.getLocation()));
    return this.#cars.filter((car) => car.getLocation() === maxLocation).map((car) => car.getName());
  }
}

export default Cars;
