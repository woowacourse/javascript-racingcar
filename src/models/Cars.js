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
        // console.log(this.#cars);
        this.#cars.forEach((car) => {
            if (this.getRandomNumber() >= 4){
                car.move()
            }
        });

        return this.#cars;
    }

    getMaxPosition(){
        let maxPosition = -1;

        this.#cars.forEach((car) => {
            if (car.position > maxPosition){
                maxPosition = car.position;
            }
        })
        
        return maxPosition;
    }

    get cars() {
        return this.#cars;
    }
}

export default Cars;