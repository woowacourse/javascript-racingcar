import RacingCars from './RacingCars.js';
import Render from './Render.js';
import UserInput from './UserInput.js';
import { isValidCarNames, isValidTryCount, getCarNamesErrorMessage, getTryCountErrorMessage } from './validation.js';
import { $ } from './util.js';
import { SELECTOR } from './constant.js';

export default class RacingGame {
    constructor() {
        this.racingCars = new RacingCars();
    }

    initialize() {
        this.initCarNameFormEvent();
        this.initTryCountFormEvent();
        this.initRestartEvent();
    }

    initCarNameFormEvent() {
        $(SELECTOR.car_name_submit_button).addEventListener('click', () => {
            const carNames = UserInput.getCarNames();
            try {
                if (!isValidCarNames(carNames)) throw new Error(getCarNamesErrorMessage(carNames));
            } catch (e) {
                alert(e.message);
                return;
            }

            this.racingCars.reset();
            this.racingCars.update(carNames);
            Render.showTryForm();
        });
    }

    initTryCountFormEvent() {
        $(SELECTOR.try_count_submit_button).addEventListener('click', () => {
            const tryCount = UserInput.getTryCount();
            try {
                if (!isValidTryCount(tryCount)) throw new Error(getTryCountErrorMessage(tryCount));
            } catch (e) {
                alert(e.message);
                return;
            }

            this.runGame(tryCount);
            this.racingCars.resetSteps();
        });
    }

    initRestartEvent() {
        $(SELECTOR.restart_button).addEventListener('click', () => {
            this.racingCars.reset();
            Render.reset();
            UserInput.reset();
        });
    }

    runGame(tryCount) {
        this.racingCars.run(tryCount);
        Render.showResult(this.racingCars.getStatus(), this.racingCars.getWinners());
    }
}
