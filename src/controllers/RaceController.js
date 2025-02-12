import CarNameValidator from "../validators/CarNameValidator.js";

class RaceController {
    #inputView;

    constructor(inputView) {
        this.#inputView = inputView; 
    }

    async race() {
        const carNames = await this.#inputView.getCarNames();
        const parseCarNames = carNames.split(",");
        CarNameValidator.valiateCarNameLength(parseCarNames);

        
    }
}

export default RaceController;