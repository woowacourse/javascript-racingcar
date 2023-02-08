const getRandomNumber = require('../utils/getRandomNumber.js');
const Car = require("./Car");

class CarGame {
    #carList = [];
    #moveList = [];

    initCarList(list){
        list.forEach((carName)=>{
            this.#carList.push(new Car(carName));
        })
        console.log(this.#carList)
    }

    moveCars(tryCount){
        for(let count = 0; count < tryCount; count++){
            this.#carList.forEach((car)=>{
                car.move(getRandomNumber());
            })
        }
    }
}

module.exports = CarGame;