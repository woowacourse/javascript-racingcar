const MIN_NUMBER = 0;
const MAX_NUMBER = 9;

class Random {
  create() {
    return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
  }
}

export default Random;
