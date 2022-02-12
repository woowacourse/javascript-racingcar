import Car from './Car.js';

export default function generateCars() {
  const names = document
    .querySelector('.name-input')
    .value.split(',')
    .map(name => name.trim());

  return names.map(name => new Car(name));
}
