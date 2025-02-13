import Cars from "../models/Cars.js";
import Winner from "../models/Winner.js";
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
        const parseCarNames = carNames.split(",").map(carName => carName.trim());
        new CarNameValidator().valiateNames(parseCarNames);

        const tryCount = await this.#inputView.getTryCount();
        const parseTryCount = Number(tryCount);
        new TryCountValidator().validateNumber(parseTryCount);

        this.#outputView.printResultHeader();

        const cars = new Cars(parseCarNames);
        const carList = cars.cars;

        for(let i=0; i<parseTryCount; i++) {
            cars.moveCars();
            this.#outputView.printRaceResult(carList);
            this.#outputView.printNewLine();
        }

        const maxPosition = cars.getMaxPosition();
        this.#outputView.printWinners(new Winner().getWinners(carList, maxPosition));
    }
}

export default RaceController;