const MAX_RANGE = 9;

const randomGenerator = () => {
  return Math.floor(Math.random() * MAX_RANGE);
};

module.exports = { randomGenerator };
