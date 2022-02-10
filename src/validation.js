const CAR_NAME_MAX_LENGTH = 5;

const isEmpty = (value) => value === '';

const someCarNames = (checkFn) => (carNames) => carNames.some(checkFn);

const haveEmpty = someCarNames(isEmpty);
const haveMiddleBlank = someCarNames((carName) => carName.match(/\s+/));
const exceedMaxLength = someCarNames((carName) => carName.length > CAR_NAME_MAX_LENGTH);

const isPositive = (number) => number > 0;

export { haveMiddleBlank, exceedMaxLength, isPositive, haveEmpty };
