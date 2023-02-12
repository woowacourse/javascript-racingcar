const ErrorHandler = {
  checkCarNames(carNames) {
    if (!/^([^,]{1,5},)*[^,]{1,5}$/.test(carNames)) return false;
    if (!carNames.includes(",")) return false;
  },

  checkRepeatNumber(repeatNumber) {
    if (!/^[1-9]\d*$/.test(repeatNumber)) return false;
  },
};
module.exports = ErrorHandler;
