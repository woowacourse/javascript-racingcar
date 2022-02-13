import { CAR_NAME_MAX_LENGTH, ERROR_MESSAGE } from './constant.js';

const isEmpty = (value) => value === '';

const isPositiveNumber = (number) => number > 0;

const someCarNames = (checkFn) => (carNames) => carNames.some(checkFn);

const haveEmpty = someCarNames(isEmpty);
const haveBlank = someCarNames((carName) => carName.match(/\s+/));
const exceedMaxLength = someCarNames((carName) => carName.length > CAR_NAME_MAX_LENGTH);

const isValidCarNames = (carNames) => (
    !haveEmpty(carNames)
    && !haveBlank(carNames)
    && !exceedMaxLength(carNames)
);

const isValidTryCount = (tryCount) => Number.isInteger(tryCount) && isPositiveNumber(tryCount);

const getCarNamesErrorMessage = (carNames) => {
    if (haveEmpty(carNames)) return ERROR_MESSAGE.empty_car_name;
    if (haveBlank(carNames)) return ERROR_MESSAGE.blank_car_name;
    if (exceedMaxLength(carNames)) return ERROR_MESSAGE.exceed_car_name;
    return ERROR_MESSAGE.no_error;
};

const getTryCountErrorMessage = (tryCount) => {
    if (!Number.isInteger(tryCount)) return ERROR_MESSAGE.natural_number;
    if (!isPositiveNumber(tryCount)) return ERROR_MESSAGE.positive_number;
    return ERROR_MESSAGE.no_error;
};

export {
    isValidCarNames, isValidTryCount, getCarNamesErrorMessage, getTryCountErrorMessage,
};
