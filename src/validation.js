import { CAR_NAME_MAX_LENGTH, ERROR_MESSAGE } from './constant/validation.js';

import { isEmptyString, isPositiveNumber } from './util/util.js';
import ValidationError from './util/ValidationError.js';

const someCarNames = (checkFn) => (carNames) => carNames.some(checkFn);

const haveEmpty = someCarNames(isEmptyString);
const haveBlank = someCarNames((carName) => carName.match(/\s+/));
const exceedMaxLength = someCarNames((carName) => carName.length > CAR_NAME_MAX_LENGTH);

const validateCarNames = (carNames) => {
    if (haveEmpty(carNames)) throw new ValidationError(ERROR_MESSAGE.EMPTY_CAR_NAME);
    if (haveBlank(carNames)) throw new ValidationError(ERROR_MESSAGE.BLANK_CAR_NAME);
    if (exceedMaxLength(carNames)) throw new ValidationError(ERROR_MESSAGE.CAR_NAME_MAX_LENGTH);
};

const validateTurnCount = ((turnCount) => {
    if (!Number.isInteger(turnCount)) throw new ValidationError(ERROR_MESSAGE.NATURAL_NUMBER);
    if (!isPositiveNumber(turnCount)) throw new ValidationError(ERROR_MESSAGE.POSITIVE_NUMBER);
});

export {
    validateCarNames,
    validateTurnCount,
};
