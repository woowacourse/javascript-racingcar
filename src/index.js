// const readline = require("readline");
const readline = require('readline');
const Car = require("./Car")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class App {
    #cars;

    constructor() {
        this.#cars = [];
    }

    play() {
        rl.question("경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n", answer => {
            let val = answer.split(',');
            console.log(val);

            this.makeCar(val);
        });
    }

    makeCar(carNames) {
        for (let i = 0; i < carNames.length; i++) {
            let car = new Car();
            car.inputName(carNames[i]);
            this.#cars.push(car);
        }

        this.inputNumber();
    }

    inputNumber() {
        rl.question("시도할 회수는 몇회인가요?\n", answer => {
            let val2 = Number(answer);
            this.makeCarMove(val2);
        });
    }

    outputCarNames() {
        for (let car of this.#cars) {
            console.log(car.getName());
        }
    }

    makeCarMove(tryNumber) {
        for (let i = 0; i < tryNumber; i++) {
            this.moveCar()
            this.printCarMove()
            console.log()
        }
    }

    printCarMove() {
        for (let car of this.#cars) {
            console.log(car.getName() + " : " + "-".repeat(car.getPosition()))
        }
    }

    moveCar() {
        for (let car of this.#cars) {
            car.decideGoAndStop(this.getRandomNumber());
        }
    }

    getRandomNumber() {
        return Math.floor(Math.random() * (10 - 0) + 0);
    }

}

const app = new App();
app.play();
module.exports = App