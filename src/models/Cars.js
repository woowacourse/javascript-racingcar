import Car from "./Car.js";

class Cars {
    #cars;

    constructor(carNames) {
        this.#cars = carNames.map((carName) => new Car(carName))
    }

    getRandomNumber(){
        return Math.floor(Math.random() * 10)
    }

    moveCars() {
        this.#cars.forEach((car) => {
            this.#checkMoveCondition(car);
        });
    }

    #checkMoveCondition (car) {
        if (this.getRandomNumber() >= 4){
            car.move();
        }
    }

    getMaxPosition() {
        return this.#cars.reduce((maxPosition, car) => {
            return car.comparePosition(maxPosition);
        }, -1);
    }

    getCars() {
        const carList = [...this.#cars];
        return carList;
    }
}

export default Cars;