import Car from './Car.js';

const racingCars = {
    cars: [],
    reset() {
        this.cars.length = 0;
    },
    isEmpty() {
        return this.cars.length === 0;
    },
    adds(carNames) {
        carNames.forEach((carName) => {
            this.cars.push(new Car(carName));
        });
    },
    run() {
        return this.cars.map((car) => car.tryForward());
    },
    getMaxStep() {
        return this.cars.reduce((acc, car) => Math.max(acc, car.step), 0);
    },
    getWinners() {
        const maxStep = this.getMaxStep();

        return this.cars.filter((car) => car.step === maxStep).map((winner) => winner.name);
    },
    resetSteps() {
        this.cars.forEach((car) => {
            car.resetStep();
        });
    },
};

export default racingCars;
