import Car from './Car.js';

class CarGame {
  #carList = [];

  setCars(carNames) {
    carNames.reduce((carList, name) => {
      this.#validateCarNamesLength(name);
      carList.push(new Car(name));
      return carList;
    }, this.#carList);
  }

  #validateCarNamesLength(carName) {
    if (carName.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5글자 이하만 가능합니다.');
    }
  }
}

export default CarGame;
