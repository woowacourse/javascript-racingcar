import ERROR_MESSAGE from '../error/message.js';
import { COMMA } from '../view/OutputView.js';
import Car from './Car.js';
<<<<<<< HEAD
import Random from './Random.js';
=======
>>>>>>> 23d6fdc (feat: Cars 클래스 유효성 검사 작성)

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

<<<<<<< HEAD
  play() {
    this.#cars.forEach((car) => {
      const randomNumber = Random.create();

      car.forward(randomNumber);
    });

    return this.#cars.map((car) => ({
      name: car.getName(),
      location: car.getLocation(),
    }));
  }

  winners() {
    const maxLocation = Math.max(...this.#cars.map((car) => car.getLocation()));
    return this.#cars
      .filter((car) => car.getLocation() === maxLocation)
      .map((car) => car.getName());
=======
  get cars() {
    return this.#cars;
>>>>>>> 23d6fdc (feat: Cars 클래스 유효성 검사 작성)
  }
}

export default Cars;
