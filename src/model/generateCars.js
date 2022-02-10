import Car from './Car.js';

export default function generateCars() {
  const cars = [];
  const names = document
    .querySelector('.name-input')
    .value.split(',')
    .map(name => name.trim());

  names.forEach(name => {
    cars.push(new Car(name));
  });

  return cars;
}
