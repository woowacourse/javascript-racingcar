function getRandomValueInRange(minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}

export default getRandomValueInRange;
