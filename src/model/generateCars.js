import $ from '../util/dom.js';

import Car from './Car.js';

export default function generateCars() {
  const names = $('.name-input')
    .value.split(',')
    .map(name => name.trim());

  return names.map(name => {
    return new Car(name);
  });
}
