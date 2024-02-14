import Car from './Car';

class CarRace {
  #cars;

  // view에서 전달되는 자동차 : "pobi, bingbong, harry"
  constructor(cars) {
    this.#cars = this.#initRaceCars(cars);
  }

  // 문자열 -> Car 인스턴스 리스트 만들기
  #initRaceCars(cars) {
    const spliitedCars = cars.split(',');
    this.#cars = spliitedCars.map((carName) => new Car(carName));
  }

  // 각 레이스 결과 보드 만들기
  makesRoundResult() {
    const result = {};

    this.#cars.forEach((car) => {
      result[car.getName()] = car.getPosition();
    });
  }

  // 가장 멀리간 차 찾기
  findMaxPosition() {
    let maxPositionCar = this.#cars[0];

    for (let index = 1; index < this.#cars.length; index++) {
      if (!maxPositionCar.isAheadOf(this.#cars[index])) {
        maxPositionCar = this.#cars[index];
      }
    }

    return maxPositionCar;
  }
}

export default CarRace;
