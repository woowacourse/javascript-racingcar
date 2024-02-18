function pickRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber + 1 - minNumber) + minNumber);
}

export default pickRandomNumber;
