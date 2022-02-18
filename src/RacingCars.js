import Car from './Car.js';

export default class RacingCars {
    constructor() {
        this.cars = [];
    }

    reset() {
        this.cars.length = 0;
    }

    initialize(carNames) {
        this.cars = carNames.map((carName) => new Car(carName));
    }

    playTurn() {
        this.cars.forEach((car) => car.playTurn());
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
