import { CAR_NAME_MAX_LENGTH, MSG } from './constant.js';

const isEmpty = (value) => value === '';

const isPositiveNumber = (number) => number > 0;

const someCarNames = (checkFn) => (carNames) => carNames.some(checkFn);

const haveEmpty = someCarNames(isEmpty);
const haveBlank = someCarNames((carName) => carName.match(/\s+/));
const exceedMaxLength = someCarNames((carName) => carName.length > CAR_NAME_MAX_LENGTH);

const isValidCarNames = (carNames) => {
    return !haveEmpty(carNames) && !haveBlank(carNames) && !exceedMaxLength(carNames);
};

const isValidTryCount = (tryCount) => {
    return Number.isInteger(tryCount) && isPositiveNumber(tryCount);
};

const getCarNamesErrorMessage = (carNames) => {
    if (haveEmpty(carNames)) return MSG.empty_car_name;
    if (haveBlank(carNames)) return MSG.blank_car_name;
    if (exceedMaxLength(carNames)) return MSG.exceed_car_name;
    return MSG.no_error;
};

const getTryCountErrorMessage = (tryCount) => {
    if (!Number.isInteger(tryCount)) return MSG.natural_number;
    if (!isPositiveNumber(tryCount)) return MSG.positive_number;
    return MSG.no_error;
};

export { isValidCarNames, isValidTryCount, getCarNamesErrorMessage, getTryCountErrorMessage };
