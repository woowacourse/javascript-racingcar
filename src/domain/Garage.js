import Car from "./Car.js";

class Garage {
  #carList = [];

  constructor(carNameList) {
    this.#carList = this.#createCarList(carNameList);
    
  }

  #createCarList(carNameList) {
    return carNameList.map(carName => new Car(carName));
  }

  #registerCar(){
    this.#carList.push();
  }
}

export default Garage;
