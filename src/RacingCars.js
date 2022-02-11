import Car from './Car.js';

export default class RacingCars {
    constructor() {
        this.cars = [];
    }

    update(carNames) {
        carNames.forEach((carName) => {
            this.cars.push(new Car(carName));
        });
    }

    run(tryCnt) {
        for (let i = 0; i < tryCnt; i += 1) {
            this.cars.forEach((car) => car.tryForward());
        }
    }

    getCarStatus() {
        return this.cars.map((car) => ({ name: car.name, step: car.step }));
    }
}
