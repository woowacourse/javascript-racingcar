function CarNameParse(str) {
  const carNames = str.split(',');
  const carNameList = carNames.map((carName) => carName.trim());

  return carNameList.slice();
}

module.exports = CarNameParse;
