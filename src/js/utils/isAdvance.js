function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * maxNumber) + minNumber;
}

const isAdvance = () => {
  return getRandomNumber(0, 9) >= 4;
};

export default isAdvance;
