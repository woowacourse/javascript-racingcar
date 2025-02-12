import Car from "./Car";

class Cars {
    #cars;

    constructor(carNames) {
        this.#cars = carNames.forEach((carName) => new Car(carName))
    }

    getRandomNumber(){
        return Math.floor(Math.random() * 10)
    }

    moveCars() {
        this.#cars.forEach((car) => {
            if (this.getRandomNumber() >= 4){
                car.move()
            }
        });
    }
}