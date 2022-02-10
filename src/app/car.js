class Car {
  constructor(name) {
    // this.id = generateId();
    this.name = name;
    this.progress = 0;
  }

  goForward() {
    this.progress += 1;
  }
}

export default Car;
