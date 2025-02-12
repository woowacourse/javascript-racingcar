import CarNameValidator from "../validators/CarNameValidator.js";
import TryNameValidator from "../validators/CarNameValidator.js";

class RaceController {
    #inputView;

    constructor(inputView) {
        this.#inputView = inputView; 
    }

    async race() {
        const carNames = await this.#inputView.getCarNames();
        const parseCarNames = carNames.split(",");
        CarNameValidator.valiateCarNameLength(parseCarNames);

        const tryCount = await this.#inputView.getTryCount();
        TryCountValidator.validateNumber(tryCount);
        const parseTryCount = Number(tryCount);
    }
}

export default RaceController;