class Car {
  constructor(carName) {
    this.carName = carName;
    this.count = 0;
    this.template = new Template();
    this.carNameTemplate = this.template.carNameBox(this.carName);
  }

  move() {
    if (this.canMove()) {
      this.count += 1;
    }
  }

  canMove() {
    if (parseInt(Math.random() * 10) < 4) {
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
