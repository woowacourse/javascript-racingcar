class Car {
  constructor(name) {
    // this.id = generateId();
    this.init(name);
  }
  checkNameLength(name) {
    return name.length <= 5;
  }
  goForward() {
    this.progress += 1;
  }
  init(name) {
    if (!this.checkNameLength(name)) {
      throw Error("5자 이하의 자동차 이름을 입력해주세요");
    }
    this.name = name;
    this.progress = 0;
  }
}

export default Car;
