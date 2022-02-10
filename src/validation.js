const haveBlank = (carNames) => carNames.some((carName) => carName.match(/\s+/));

export default haveBlank;
