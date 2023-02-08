class CarGame {
    #carList = [];

    initCarList(list){
        list.forEach((carName)=>{
            this.#carList.push(new Car(carName));
        })
    }
}

module.exports = CarGame;