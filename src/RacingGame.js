import RacingCars from './RacingCars.js';
import View from './View.js';
import {
    isValidCarNames, isValidTryCount, getCarNamesErrorMessage, getTryCountErrorMessage,
} from './utils/validation.js';
import { $, userInputValue } from './utils/util.js';
import { KEYCODE_ENTER } from './constants/constant.js';
import SELECTOR from './constants/selectors.js';

export default class RacingGame {
    constructor() {
        this.racingCars = new RacingCars();
        this.view = new View();
    }

    initialize() {
        this.setClickEvent();
        this.setKeyDownEnterEvent();
    }

    setClickEvent() {
        $(SELECTOR.car_name_submit_button).addEventListener('click', () => { this.onSubmitCarName(); });
        $(SELECTOR.try_count_submit_button).addEventListener('click', () => { this.onSubmitTryCount(); });
        $(SELECTOR.restart_button).addEventListener('click', () => { this.onClickRestartButton(); });
    }

    setKeyDownEnterEvent() {
        $(SELECTOR.car_name_input).addEventListener('keydown', (event) => {
            if (event.keyCode === KEYCODE_ENTER) {
                event.preventDefault();
                this.onSubmitCarName();
            }
        });
        $(SELECTOR.try_count_input).addEventListener('keydown', (event) => {
            if (event.keyCode === KEYCODE_ENTER) {
                event.preventDefault();
                this.onSubmitTryCount();
            }
        });
    }

    onSubmitCarName() {
        const carNames = userInputValue.carNames();
        try {
            if (!isValidCarNames(carNames)) throw new Error(getCarNamesErrorMessage(carNames));
        } catch (e) {
            alert(e.message);
            return;
        }
        this.racingCars.reset();
        this.racingCars.update(carNames);
        this.view.showTryForm();
    }

    onSubmitTryCount() {
        const tryCount = userInputValue.tryCount();
        try {
            if (!isValidTryCount(tryCount)) throw new Error(getTryCountErrorMessage(tryCount));
        } catch (e) {
            alert(e.message);
            return;
        }
        this.runGame(tryCount);
        this.racingCars.resetSteps();
    }

    onClickRestartButton() {
        this.racingCars.reset();
        this.view.reset();
        userInputValue.reset();
    }

    runGame(tryCount) {
        this.racingCars.run(tryCount);
        this.view.showResult(this.racingCars.getStatus(), this.racingCars.getWinners());
    }
}
