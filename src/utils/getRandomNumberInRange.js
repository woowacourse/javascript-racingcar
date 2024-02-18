const getRandomNumberInRange = (start, end) => {
  return start + Math.round(Math.random() * (end - start));
};

module.exports = getRandomNumberInRange;
