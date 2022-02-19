import Car from "./Car.js";

class RacingGameModel {

  startRacingGame(carNameValue) {
    return this.carList = carNameValue
      .split(",")
      .map((name) => new Car(name));
  }

  countCarsMove(raceCountValue) {
    this.carList
      .map((car) => {
        let raceCounting = 0;
        while (raceCounting !== Number(raceCountValue)) {
          car.move();
          raceCounting++;
        }
      });
  }

  findWinner() {
    return this.carList
      .filter((car) => car.count === Math.max(...this.carList.map((car) => car.count)))
      .map((car) => car.carName)
      .join(", ");
  }

};

export default RacingGameModel;