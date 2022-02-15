const MIN_NUMBER_OF_MOVE = 4;
class Car {
  constructor(carName) {
    this.carName = carName;
    this.count = 0;
    this.template = new Template();
    this.carNameTemplate = this.template.carNameBox(this.carName);
  }

  move() {
    this.count += 1;
  }

  canMove(randomRaceScore) {
    if (randomRaceScore < MIN_NUMBER_OF_MOVE) {
      return false;
    }
    return true;
  }
}

class Template {
  carNameBox(carName) {
    return `
      <div class="car-name-box">
        <div class="car-name-box-text">${carName}</div>
      </div>
    `;
  }
}

export default Car;
