import { Car } from '../class/Car.js';

export const generateCarInstances = (carNameInputValue) => {
  return carNameInputValue.split(',').map((carName) => new Car(carName.trim()));
};
