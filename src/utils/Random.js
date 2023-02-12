const Random = {
  pickNumberInRange(start, end) {
    return (
      Math.floor(Math.random() * (end + 1 - Math.ceil(start))) +
      Math.ceil(start)
    );
  },
};

module.exports = Random;
