import Car from './Car';

class Cars {
  #cars;

  constructor(carNames) {
    this.#validateName(carNames);
    this.#validateRedundant(carNames);
    this.#cars = carNames.split(',').map(name => {
      return new Car(name);
    });
  }

  #validateName(carNames) {
    const nameRegex = new RegExp(/^[\w|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,5}(?:,[\w|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,5})*$/);
    if (!nameRegex.test(carNames)) throw new Error('자동차 이름 입력이 올바르지 않습니다');
  }

  #validateRedundant(carNames) {
    const splittedCarNames = carNames.split(',');
    const uniqueCarNames = new Set(splittedCarNames);
    if (splittedCarNames.length !== uniqueCarNames.size) {
      throw new Error('중복된 자동차 이름이 있습니다.');
    }
  }

  moveCars() {
    this.#cars.forEach(car => {
      car.move();
    });
  }

  get result() {
    return this.#cars.reduce((acc, car) => {
      acc[car.name] = car.position;
      return acc;
    }, {});
  }

  judgeWinner() {
    const maxPosition = this.#cars.reduce((acc, car) => {
      if (acc <= car.position) {
        acc = car.position;
      }
      return acc;
    }, 0);

    return this.#cars
      .filter(car => {
        return car.position === maxPosition;
      })
      .map(winner => winner.name);
  }

  //getWinnerCars(){}
}

export default Cars;
