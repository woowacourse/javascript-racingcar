class RaceController {
    #inputView;

    constructor(inputView) {
        this.#inputView = inputView; 
    }

    async race() {
        const carNames = await this.#inputView.getCarNames();
        const parseCarNames = carNames.split(",");
        
    }
}

export default RaceController;