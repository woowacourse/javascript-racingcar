class RaceController {
    #inputView;

    constructor(inputView) {
        this.#inputView = inputView; 
    }

    async race() {
        const name = await this.#inputView.getCarNames();
    }
}

export default RaceController;