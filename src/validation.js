import { MSG } from './constant.js';

const CAR_NAME_MAX_LENGTH = 5;

const isEmpty = (value) => value === '';

const someCarNames = (checkFn) => (carNames) => carNames.some(checkFn);

const haveEmpty = someCarNames(isEmpty);
const haveMiddleBlank = someCarNames((carName) => carName.match(/\s+/));
const exceedMaxLength = someCarNames((carName) => carName.length > CAR_NAME_MAX_LENGTH);

const isValidCarNames = (carNames) => {
    if (haveEmpty(carNames)) return alert(MSG.empty_car_name);
    if (haveMiddleBlank(carNames)) return alert(MSG.blank_car_name);
    if (exceedMaxLength(carNames)) return alert(MSG.exceed_car_name);

    return true;
};

const isPositive = (number) => number > 0;

const isValidTryCnt = (tryCnt) => {
    if (!Number.isInteger(tryCnt)) return alert(MSG.natural_number);
    if (!isPositive(tryCnt)) return alert(MSG.positive_number);

    return true;
};

export { isValidCarNames, isValidTryCnt };
