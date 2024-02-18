import Car from './Car.js';

class Cars {
  cars = [];

  makeCars(carNames) {
    carNames.forEach((carName) => {
      this.cars.push(new Car(carName));
    });
  }
}

export default Cars;
