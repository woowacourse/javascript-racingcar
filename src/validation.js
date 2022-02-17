import { CAR_NAME_MAX_LENGTH, ERROR_MESSAGE } from './constant.js';

const isEmpty = (value) => value === '';

const someCarNames = (checkFn) => (carNames) => carNames.some(checkFn);

const haveEmpty = someCarNames(isEmpty);
const haveMiddleBlank = someCarNames((carName) => carName.match(/\s+/));
const exceedMaxLength = someCarNames((carName) => carName.length > CAR_NAME_MAX_LENGTH);

const isValidCarNames = (carNames) => {
    if (haveEmpty(carNames)) return alert(ERROR_MESSAGE.EMPTY_CAR_NAME);
    if (haveMiddleBlank(carNames)) return alert(ERROR_MESSAGE.BLANK_CAR_NAME);
    if (exceedMaxLength(carNames)) return alert(ERROR_MESSAGE.EXCEED_CAR_NAME);

    return true;
};

const isPositive = (number) => number > 0;

const isValidTryCnt = (tryCnt) => {
    if (!Number.isInteger(tryCnt)) return alert(ERROR_MESSAGE.NATURAL_CAR_NAME);
    if (!isPositive(tryCnt)) return alert(ERROR_MESSAGE.POSITIVE_CAR_NAME);

    return true;
};

export { isValidCarNames, isValidTryCnt };
