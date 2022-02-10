export class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }
  setLocation(location) {
    this.location = location;
  }

  getLocation() {
    return this.location;
  }

  getName() {
    return this.name;
  }

  moveFoward() {
    this.location += 1;
  }
}
