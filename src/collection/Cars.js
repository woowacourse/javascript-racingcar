class Cars {
  #cars;

  constructor(cars) {
    this.#cars = [];
    this.#validate(cars);
  }

  #validate(cars) {
    const uniqueCarNames = new Set();
    cars.forEach((car) => {
      car.addNameForDuplicatedCheck(uniqueCarNames);
    });

    if (uniqueCarNames.size !== cars.length) {
      throw new Error('차 이름은 중복되지 않아야 합니다.');
    }
  }
}

export default Cars;
