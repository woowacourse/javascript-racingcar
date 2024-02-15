const getRandomNumber = (start, end) => {
  return start + Math.round(Math.random() * (end - start));
};

module.exports = getRandomNumber;
