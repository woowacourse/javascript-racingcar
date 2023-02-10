const RandomGenerator = {
  pickRandomNumber() {
    return Math.floor((Math.random() * 10) % 10);
  },
};

export default RandomGenerator;
