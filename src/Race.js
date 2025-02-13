import Car from "./Car.js";
import Output from "./Output.js";
class Race {
  #cars;
  #count;

  constructor(names, count) {
    this.#cars = names.map((carName) => new Car(carName));
    this.#count = count;
  }

  raceCar() {
    const output = new Output();
    console.log("\n실행 결과");
    for (let i = 0; i < this.#count; i++) {
      this.#cars.forEach((car) => {
        car.tryMove();
        output.printCarPosition(car);
      });
      console.log();
    }
  }

  getWinner() {
    let maxNum = 0;
    let winnerList = [];

    this.#cars.forEach((car) => {
      if (car.position > maxNum) {
        maxNum = car.position;
        winnerList = [car.name];
      } else if (car.position === maxNum) {
        winnerList.push(car.name);
      }
      return;
    });

    return winnerList;
  }
}

export default Race;
