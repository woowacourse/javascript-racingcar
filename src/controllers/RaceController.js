import Cars from "../models/Cars.js";
import CarNameValidator from "../validators/CarNameValidator.js";
import TryCountValidator from "../validators/TryCountValidator.js";

class RaceController {
    #inputView;
    #outputView;

    constructor(views) {
        this.#inputView = views.inputView; 
        this.#outputView = views.outputView;
    }

    async race() {
        const carNames = await this.#inputView.getCarNames();
        const parseCarNames = carNames.split(",");
        CarNameValidator.valiateCarNameLength(parseCarNames);

        const tryCount = await this.#inputView.getTryCount();
        const parseTryCount = Number(tryCount);
        TryCountValidator.validateNumber(parseTryCount);
        

        this.#outputView.printResultHeader();

        const cars = new Cars(parseCarNames);
        for(let i=0; i<parseTryCount; i++) {
            cars.moveCars();
            this.#outputView.printRaceResult(cars);
        }

        this.#outputView.printWinners();
        

    }
}

export default RaceController;