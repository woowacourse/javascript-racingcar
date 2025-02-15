import Car from "./Car.js";
import { MOVE_THRESHOLD } from "../Const.js";
class Race {
  #cars;
  #raceCount;
  #moveResult;

  constructor(names, raceCount) {
    this.#cars = names.map((raceCarName) => new Car(raceCarName));
    this.#raceCount = raceCount;
    this.#moveResult = "";
  }
  #getRandomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  #formatCarPosition(car) {
    let positionStick = `${car.raceCarName} : `;
    for (let i = 0; i < car.position; i++) {
      positionStick += "-";
    }
    return positionStick;
  }

  #tryMove(car) {
    const randomNumber = this.#getRandomNumber();
    if (randomNumber >= MOVE_THRESHOLD) {
      car.moveOneStep();
    }
  }

  getMoveResult() {
    return this.#moveResult;
  }

  getWinner() {
    let maxNum = 0;
    let winnerList = [];

    this.#cars.forEach((car) => {
      if (car.position > maxNum) {
        maxNum = car.position;
        winnerList = [car.raceCarName];
      } else if (car.position === maxNum) {
        winnerList.push(car.raceCarName);
      }
    });
    return winnerList;
  }

  raceCar() {
    for (let i = 0; i < this.#raceCount; i++) {
      this.#cars.forEach((car) => {
        this.#tryMove(car);
        this.#moveResult += this.#formatCarPosition(car) + "\n";
      });
      this.#moveResult += "\n";
    }
  }
}

export default Race;
