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
            const moveData = [];
            this.#carList.forEach((car)=>{
                const moveResult = car.move(getRandomNumber());
                moveData.push(moveResult);
            })
            this.#moveList.push([...moveData]);
        }
    }

    getCarNames(){
        const carNames =[];
        this.#carList.forEach((car)=>{
            carNames.push(car.getName());
        })
        return carNames;
    }

    getMoveDatas(){
        return this.#moveList.map((datas)=>{
            return [...datas];
        })
    }
}

module.exports = CarGame;