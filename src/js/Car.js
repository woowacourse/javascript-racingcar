export default function Car(name) {
  this.carName = name;
  this.totalStep = 0;

  this.go = () => {
    this.totalStep += 1;
  };
}
