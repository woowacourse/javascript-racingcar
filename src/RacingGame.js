import RacingCars from './RacingCars.js';
import Render from './Render.js';
import UserInput from './UserInput.js';
import { haveMiddleBlank, exceedMaxLength, isPositive, haveEmpty } from './validation.js';
import { $ } from './util.js';
import { MSG, SELECTOR } from './constant.js';

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
            if (haveEmpty(carNames)) return alert(MSG.empty_car_name);
            if (haveMiddleBlank(carNames)) return alert(MSG.blank_car_name);
            if (exceedMaxLength(carNames)) return alert(MSG.exceed_car_name);

            this.racingCars.reset();
            this.racingCars.update(carNames);
            Render.showTryForm();
        });
    }

    initTryCntFormEvent() {
        $(SELECTOR.try_count_submit_button).addEventListener('click', () => {
            const tryCnt = UserInput.getTryCnt();
            if (!Number.isInteger(tryCnt)) return alert(MSG.natural_number);
            if (!isPositive(tryCnt)) return alert(MSG.positive_number);

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
