export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
    this.isLoading = false;
  }

  moveForward() {
    this.position++;
    this.loading();
  }

  loading() {
    this.isLoading = true;
  }

  finishLoading() {
    this.isLoading = false;
  }
}
