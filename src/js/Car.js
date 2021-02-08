export function Car() {
  this.carName = "";
  this.totalStep = 0;

  this.go = () => {
    this.totalStep += 1;
  };
}
