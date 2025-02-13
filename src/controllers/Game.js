import { Parser } from '../utils/Parser.js';
import { createRandom } from '../utils/Random.js';
import Car from '../models/Car.js';

export default class Game {
  #carList;

  constructor() {
    this.#carList = [];
  }

  createCarList(userInput) {
    const names = Parser.splitName(userInput);
    names.forEach(name => {
      this.#carList.push(new Car(name));
    });
  }

  judgeWinner() {
    const winnerNames = [];
    let maxPosition = 0;
    this.#carList.forEach(car => {
      if (car.position > maxPosition) {
        maxPosition = car.position;
      }
    });

    this.#carList.forEach(car => {
      console.log('car postion/maxposition>>>', `${car.position}, ${maxPosition}`);
      if (car.position === maxPosition) {
        winnerNames.push(car.name);
        console.log('이프문 안에서 카네임>>>>>', car.name);
      }
    });

    console.log('위너네임들 테스트>>>>', winnerNames);

    return winnerNames;
  }

  start() {
    this.createCarList('beomtae, camel');
    this.#carList.forEach(car => {
      for (let i = 0; i < 5; i++) {
        const randomValue = createRandom();
        car.moveForward(randomValue);
      }
    });
    const winnerNames = this.judgeWinner();
    console.log(winnerNames);
  }
}
