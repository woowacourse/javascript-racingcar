import RacingCars from './RacingCars.js';
import Render from './Render.js';
import UserInput from './UserInput.js';
import { isValidCarNames, isValidTryCnt } from './validation.js';
import { $ } from './util.js';
import { SELECTOR } from './constant.js';

export default class RacingGame {
    constructor() {
        this.racingCars = new RacingCars();
    }

    initialize() {
        this.initCarNameFormEvent();
        this.initTryCntFormEvent();
        this.initRestartEvent();
    }

    initCarNameFormEvent() {
        $(SELECTOR.car_name_submit_button).addEventListener('click', () => {
            const carNames = UserInput.getCarNames();
            if (!isValidCarNames(carNames)) return;

            this.racingCars.reset();
            this.racingCars.update(carNames);
            Render.showTryForm();
        });
    }

    initTryCntFormEvent() {
        $(SELECTOR.try_count_submit_button).addEventListener('click', () => {
            const tryCnt = UserInput.getTryCnt();
            if (!isValidTryCnt(tryCnt)) return;

            this.runGame(tryCnt);
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

    runGame(tryCnt) {
        this.racingCars.run(tryCnt);
        Render.showResult(this.racingCars.getStatus(), this.racingCars.getWinners());
    }
}
