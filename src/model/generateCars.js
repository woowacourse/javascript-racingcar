import Car from './Car.js';

export const getCarNameArrays = value => {
  return value.split(',').map(name => name.trim());
};

export const generateCars = value => {
  return getCarNameArrays(value).map(name => new Car(name));
};
