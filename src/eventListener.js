import racingCars from './racingCars.js';
import render from './render.js';
import userInput from './userInput.js';
import RunGame from './RunGame.js';
import { isValidCarNames, isValidTryCount } from './validation.js';

const actionSubmitCarNames = (carNames) => {
    racingCars.reset();
    racingCars.adds(carNames);
    render.showTryForm();
    userInput.focusTryCountInput();
};

const onSubmitCarNames = () => {
    const carNames = userInput.getCarNames();

    try {
        isValidCarNames(carNames);
    } catch (error) {
        alert(error.message);
        return;
    }

    actionSubmitCarNames(carNames);
};

const onSubmitTryCount = () => {
    const tryCount = userInput.getTryCount();

    try {
        isValidTryCount(tryCount);
    } catch (error) {
        alert(error.message);
        return;
    }

    new RunGame(tryCount).start();
};

const onClickRestartButton = () => {
    racingCars.reset();
    render.reset();
    userInput.reset();
    userInput.focusCarNameInput();
};

export { onSubmitCarNames, onSubmitTryCount, onClickRestartButton };
