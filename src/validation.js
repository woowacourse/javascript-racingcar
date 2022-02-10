const CAR_NAME_MAX_LENGTH = 5;

const someCarNames = (checkFn) => (carNames) => carNames.some(checkFn);
const haveBlank = someCarNames((carName) => carName.match(/\s+/));
const exceedMaxLength = someCarNames((carName) => carName.length > CAR_NAME_MAX_LENGTH);

export { haveBlank, exceedMaxLength };
