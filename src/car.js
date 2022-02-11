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
    if (number >= MOVE_CRITERIA) {
      this.step += 1;
    }
  }
}
