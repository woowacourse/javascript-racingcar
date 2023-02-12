const RandomMaker = {
  RandomMinMax(min, max) {
    return Math.random() * (max - min) + min;
  },
};

module.exports = RandomMaker;
