class Random {
  static randomNumberBetween(inclusiveStart, exclusiveEnd) {
    return inclusiveStart + Math.floor(Math.random() * exclusiveEnd);
  }
}

export default Random;
