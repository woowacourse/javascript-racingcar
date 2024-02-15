class CarNamesValidator {
  static isValidCount(cars) {
    if (cars.length < 2) {
      throw new Error('[ERROR] 자동차 대수는 2대 이상만 가능하다.');
    }
  }

  static isDuplicate(cars) {
    if (new Set(cars.map((car) => car.getName())).size !== cars.length) {
      throw new Error('[ERROR] 자동차 이름은 중복될 수 없다.');
    }
  }

  static isValidRange(carName) {
    if (carName.length < 1 || carName.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 1자 이상, 5자 이하만 가능하다.');
    }
  }
}

export default CarNamesValidator;
