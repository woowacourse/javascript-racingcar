class Winner {
    #winners;

    constructor() {
        this.#winners = [];
    }

    getWinners(carList, maxPosition) {
        carList.forEach ((car) => {
            if (maxPosition === car.position){
                this.#winners.push(car.name);
            }
        });
        
        return this.#winners;
    }
}

export default Winner;