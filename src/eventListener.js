import racingCars from './racingCars.js';
import render from './render.js';
import userInput from './userInput.js';
import RunGame from './RunGame.js';
import { isValidCarNames, isValidTryCount } from './validation.js';

const runGame = new RunGame();

const actionSubmitCarNames = (carNames) => {
    racingCars.adds(carNames);
    render.showTryForm();
    userInput.focusTryCountInput();
};

const onSubmitCarNames = () => {
    if (runGame.isRunning()) return;

    const carNames = userInput.getCarNames();

    try {
        isValidCarNames(carNames);
    } catch (error) {
        alert(error.message);
        return;
    }

    actionSubmitCarNames(carNames);
};

const onKeyUpCarNamesInput = () => {
    racingCars.reset();
    render.hideTryForm();
};

const actionSubmitTryCount = (tryCount) => {
    racingCars.resetSteps();
    render.resetWinners();
    runGame.setTryCount(tryCount).start();
};

const onSubmitTryCount = () => {
    if (runGame.isRunning()) return;

    const tryCount = userInput.getTryCount();

    try {
        isValidTryCount(tryCount);
    } catch (error) {
        alert(error.message);
        return;
    }

    actionSubmitTryCount(tryCount);
};

const onClickRestartButton = () => {
    racingCars.reset();
    render.reset();
    userInput.reset();
    userInput.focusCarNameInput();
};

export { onSubmitCarNames, onKeyUpCarNamesInput, onSubmitTryCount, onClickRestartButton };
