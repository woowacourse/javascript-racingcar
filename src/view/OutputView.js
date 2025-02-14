export const OutputView = {
  printMessage(message) {
    console.log(message);
  },
  printError(error) {
    console.error(error.message);
  },
  printCar(car) {
    console.log(`${car.name} : ${"-".repeat(car.position)}`);
  },
};
