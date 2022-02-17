import Car from './Car.js';

export default class RacingCars {
    constructor() {
        this.cars = [];
    }

    reset() {
        this.cars.length = 0;
    }

    adds(carNames) {
        carNames.forEach((carName) => {
            this.cars.push(new Car(carName));
        });
    }

    run(tryCount) {
        for (let i = 0; i < tryCount; i += 1) {
            this.cars.forEach((car) => car.tryForward());
        }
    }

    getMaxStep() {
        return this.cars.reduce((acc, car) => Math.max(acc, car.step), 0);
    }

    getWinners() {
        const maxStep = this.getMaxStep();

        return this.cars.filter((car) => car.step === maxStep).map((winner) => winner.name);
    }

    resetSteps() {
        this.cars.forEach((car) => {
            car.resetStep();
        });
    }
}
