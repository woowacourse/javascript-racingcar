class Winner {
    #winners;

    constructor() {
        this.#winners = [];
    }

    getWinners(cars, carList) {
        const maxPostion = cars.getMaxPosition();

        carList.forEach((car) => {
            if (maxPostion === car.position){
                this.#winners.push(car.name);
            }
        });
        
        return this.#winners;
    }
}

export default Winner;