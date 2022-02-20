import { CAR_NAME_MAX_LENGTH, ERROR_MESSAGE } from './constant.js';
import racingCars from './racingCars.js';

const someCarNames = (checkFn) => (carNames) => carNames.some(checkFn);

const haveEmpty = someCarNames((value) => value === '');
const haveMiddleBlank = someCarNames((carName) => carName.match(/\s+/));
const exceedMaxLength = someCarNames((carName) => carName.length > CAR_NAME_MAX_LENGTH);

const isValidCarNames = (carNames) => {
    if (haveEmpty(carNames)) throw new Error(ERROR_MESSAGE.EMPTY_CAR_NAME);
    if (haveMiddleBlank(carNames)) throw new Error(ERROR_MESSAGE.BLANK_CAR_NAME);
    if (exceedMaxLength(carNames)) throw new Error(ERROR_MESSAGE.EXCEED_CAR_NAME);

    return true;
};

const isPositiveNumber = (number) => number > 0;

const isValidTryCount = (tryCount) => {
    if (racingCars.isEmpty()) throw new Error(ERROR_MESSAGE.FIRST_ENROLL_CAR);
    if (!isPositiveNumber(tryCount)) throw new Error(ERROR_MESSAGE.NEGATIVE_TRY_COUNT);

    return true;
};

export { isValidCarNames, isValidTryCount };
