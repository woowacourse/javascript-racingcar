import Car from "./Car.js";

export default class Cars {
  static MIN_LENGTH = 2;
  static MAX_LENGTH = 100;

  #cars;

  constructor(cars) {
    this.#validate(cars);
    this.#cars = cars;
  }

  goAll() {
    this.#cars.forEach((car) => car.go());
  }

  getMileageBoard() {
    return this.#cars.map((car) => ({ name: car.getName(), mileage: car.getMileage() }));
  }

  getFirstPlaceNames() {
    const firstPlaceCars = this.#getFirstPlace();
    return firstPlaceCars.map((car) => car.getName());
  }

  #getFirstPlace() {
    const maxMileage = this.#getMaxMileage();
    return this.#cars.filter((car) => car.getMileage() === maxMileage);
  }

  #getMaxMileage() {
    return Math.max(...this.#cars.map((car) => car.getMileage()));
  }

  #validate(cars) {
    this.#validateLength(cars);
    this.#validateUnique(cars);
    this.#validateType(cars);
  }

  #validateLength(cars) {
    if (cars.length < Cars.MIN_LENGTH || cars.length > Cars.MAX_LENGTH) {
      throw new Error("자동차는 2대 이상 100대 이하만 가능합니다.");
    }
  }

  #validateUnique(cars) {
    const names = cars.map((car) => car.getName());

    if (new Set(names).size !== names.length) {
      throw new Error("중복되지 않은 이름을 입력해주세요.");
    }
  }

  #validateType(cars) {
    if (!cars.every((car) => car instanceof Car)) {
      throw new Error("Car 인스턴스만 가능합니다.");
    }
  }
}
