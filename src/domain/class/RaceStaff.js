import Car from './Car';
import RaceResult from './RaceResult';

class RaceStaff {
  #carMover;

  constructor(carMover) {
    this.#carMover = carMover;
  }

  getResult(carNames, maxTryCount) {
    const raceResult = new RaceResult();
    carNames.forEach(name => {
      const nowCar = new Car(name);
      this.#carMover.giveManyTry(nowCar, maxTryCount);
      raceResult.pushCarPosition(nowCar);
    });
    return raceResult;
  }
}

export default RaceStaff;
