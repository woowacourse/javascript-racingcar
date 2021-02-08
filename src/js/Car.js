export default function Car(name) {
  this.name = name;
  this.totalStep = 0;

  this.go = () => {
    this.totalStep += 1;
  };
}
