import { CAR_NAME_MAX_LENGTH, ERROR_MESSAGE } from '../constants/validation.js';
import ValidationError from './ValidationError.js';

const isEmpty = (value) => value === '';
const isPositiveNumber = (number) => number > 0;

const someCarNames = (checkFn) => (carNames) => carNames.some(checkFn);

const haveEmpty = someCarNames(isEmpty);
const haveBlank = someCarNames((carName) => carName.match(/\s+/));
const exceedMaxLength = someCarNames((carName) => carName.length > CAR_NAME_MAX_LENGTH);

const validationCarNames = (carNames) => {
    if (haveEmpty(carNames)) throw new ValidationError(ERROR_MESSAGE.empty_car_name);
    if (haveBlank(carNames)) throw new ValidationError(ERROR_MESSAGE.blank_car_name);
    if (exceedMaxLength(carNames)) throw new ValidationError(ERROR_MESSAGE.exceed_car_name);
};

const validationTryCount = ((tryCount) => {
    if (!Number.isInteger(tryCount)) throw new ValidationError(ERROR_MESSAGE.natural_number);
    if (!isPositiveNumber(tryCount)) throw new ValidationError(ERROR_MESSAGE.positive_number);
});

export {
    validationCarNames,
    validationTryCount,
};
