import { CAR_NAME_MAX_LENGTH, MSG } from './constant.js';

const isEmpty = (value) => value === '';

const isPositive = (number) => number > 0;

const someCarNames = (checkFn) => (carNames) => carNames.some(checkFn);

const haveEmpty = someCarNames(isEmpty);
const haveMiddleBlank = someCarNames((carName) => carName.match(/\s+/));
const exceedMaxLength = someCarNames((carName) => carName.length > CAR_NAME_MAX_LENGTH);

const isValidCarNames = (carNames) => {
    return !haveEmpty(carNames) && !haveMiddleBlank(carNames) && !exceedMaxLength(carNames);
};

const isValidTryCnt = (tryCnt) => {
    return Number.isInteger(tryCnt) && isPositive(tryCnt);
};

const getCarNamesErrorMessage = (carNames) => {
    if (haveEmpty(carNames)) return MSG.empty_car_name;
    if (haveMiddleBlank(carNames)) return MSG.blank_car_name;
    if (exceedMaxLength(carNames)) return MSG.exceed_car_name;
    return MSG.no_error;
};

const getTryCntErrorMessage = (tryCnt) => {
    if (!Number.isInteger(tryCnt)) return MSG.natural_number;
    if (!isPositive(tryCnt)) return MSG.positive_number;
    return MSG.no_error;
};

export { isValidCarNames, isValidTryCnt, getCarNamesErrorMessage, getTryCntErrorMessage };
