const ErrorHandler = {
  checkCarNames(carNames) {
    if (!/^([^,]{1,5},)*[^,]{1,5}$/.test(carNames)) return false;
    if (!carNames.includes(",")) return false;
    return true;
  },

  checkRepeatNumber(repeatNumber) {
    if (!/^[1-9]\d*$/.test(repeatNumber)) return false;
    return true;
  },
};
module.exports = ErrorHandler;
