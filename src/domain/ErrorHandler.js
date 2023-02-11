const ErrorHandler = {
  checkCarNames(carNames) {
    if (!/^([^,]{1,5},)*[^,]{1,5}$/.test(carNames)) return 0;
    if (!carNames.includes(",")) return 0;
  },

  checkRepeatNumber(repeatNumber) {
    if (!/^[1-9]\d*$/.test(repeatNumber)) return 0;
  },
};
module.exports = ErrorHandler;
