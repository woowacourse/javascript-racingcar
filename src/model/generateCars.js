import $ from '../utils/selector.js';
import Car from './Car.js';

export default function generateCars() {
  const names = $('.name-input')
    .value.split(',')
    .map(name => name.trim());

  return names.map(name => new Car(name));
}
