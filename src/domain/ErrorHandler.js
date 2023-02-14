const ErrorHandler = {
  checkCarNames(carNames) {
    return /^([^,]{1,5},)*[^,]{1,5}$/.test(carNames);
  },

  checkIsOneCar(cars) {
    return cars.length === 1;
  },

  checkIsSameCarName (cars) {
    const carSet = new Set(cars);
    return carSet.size != cars.length;
  },

  checkRepeatNumber(repeatNumber) {
    return /^[1-9]\d*$/.test(repeatNumber);
  },
};
module.exports = ErrorHandler;
