class Winner {
    #winners;

    constructor() {
        this.#winners = [];
    }

    getWinners(carList) {
        const maxPostion = carList.getMaxPosition();

        carList.forEach((car) => {
            if (maxPostion === car.postion){
                this.#winners.push(car.name);
            }
        })
    }
}