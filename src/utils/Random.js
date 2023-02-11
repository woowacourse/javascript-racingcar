const Random = {
  randomNumberBetween(inclusiveStart, exclusiveEnd) {
    return inclusiveStart + Math.floor(Math.random() * exclusiveEnd);
  },
};

export default Random;
