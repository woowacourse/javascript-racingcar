import ERROR_MESSAGE from '../error/message.js';
import { COMMA } from '../view/OutputView.js';
import Car from './Car.js';
import Random from './Random.js';

class Cars {
  #cars;

  constructor(names) {
    const parsedNames = this.#parse(names);

    this.#validate(parsedNames);

    this.#cars = parsedNames.map((name) => new Car(name));
  }

  #parse(names) {
    return names.split(COMMA).map((name) => name.trim());
  }

  #validate(names) {
    const uniqueNames = new Set(names);

    if (uniqueNames.size !== names.length)
      throw new Error(`${ERROR_MESSAGE.duplicated} ${ERROR_MESSAGE.retry}`);
  }

  play() {
    this.#cars.forEach((car) => {
      car.forward();
    });

    return this.#cars.map(({ name, location }) => ({
      name,
      location,
    }));
  }

  winners() {
    const maxLocation = Math.max(...this.#cars.map(({ location }) => location));
    return this.#cars.filter(({ location }) => location === maxLocation).map(({ name }) => name);
  }
}

export default Cars;
