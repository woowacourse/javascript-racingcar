function parseCarName(carNames) {
  return carNames.split(',').map((name) => name.trim());
}

module.exports = parseCarName;
