const ErrorHandler = {
  checkCarNames(carNames) {
    if (!/^([^,]{1,5},)*[^,]{1,5}$/.test(carNames)) return false;
    return true;
  },

  checkIsOneCar(cars) {
    if (cars.length === 1) return true;
    return false;
  },

  checkIsSameCarName (cars) {
    const carSet = new Set(cars);
    if (carSet.size != cars.length) return true;
    return false;
  },

  checkRepeatNumber(repeatNumber) {
    if (!/^[1-9]\d*$/.test(repeatNumber)) return false;
    return true;
  },
};
module.exports = ErrorHandler;
