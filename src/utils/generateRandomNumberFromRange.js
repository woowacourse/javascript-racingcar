const generateRandomNumberFromRange = (startNumber, endNumber) => {
  return Math.floor(Math.random() * (endNumber - startNumber + 1));
};

export default generateRandomNumberFromRange;
