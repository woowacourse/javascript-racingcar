class Car {
  constructor(carName) {
    this.carName = carName;
    this.count = 0;
    this.template = new Template();
    this.carNameTemplate = this.template.carNameBox(this.carName);
  }

  move() {}
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
