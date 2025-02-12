class Car {
  name;
  position;

  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  move(value) {
    if (value >= 4) this.position += 1;
  }

  getRacingStatus() {
    return `${this.name} : ${'-'.repeat(this.position)}`;
  }
}

export default Car;
