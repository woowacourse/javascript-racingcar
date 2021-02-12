import { Car } from './Car.js';

export const generateCarInstances = (carNameInputValue) => {
  return carNameInputValue.split(',').map((carName) => new Car(carName.trim()));
};
