export default class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
  }

  generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  randomMove() {
    const number = this.generateRandomNumber();
    if (number >= 4) {
      this.step += 1;
    }
  }
}
