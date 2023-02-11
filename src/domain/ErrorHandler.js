
const ErrorHandler = {
  checkCarNames(carNames) {
    if (!/^([^,]{1,5},)*[^,]{1,5}$/.test(carNames)) throw new Error();
  },

  checkRepeatNumber(repeatNumber) {
    if (!/^[1-9]\d*$/.test(repeatNumber)) throw new Error();
  }
}