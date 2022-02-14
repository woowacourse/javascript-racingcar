const isAdvance = () => {
  return generateRandomNumber(9) >= 4;
};

function generateRandomNumber(maxNumber) {
  return Math.random() * maxNumber;
}

export default isAdvance;
