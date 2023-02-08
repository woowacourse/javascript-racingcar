const Car = require("./Car");

class CarGame {
    #carList = [];

    initCarList(list){
        list.forEach((carName)=>{
            this.#carList.push(new Car(carName));
        })
        console.log(this.#carList)
    }
}

module.exports = CarGame;