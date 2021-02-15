export default function Car(name) {
  this.name = name;
  this.totalStep = 0;
}

Car.prototype.go = function () {
  this.totalStep += 1;
};
