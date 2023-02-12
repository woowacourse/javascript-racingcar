const { MESSAGE } = require("../utils/Constant");
 const Validation = require("../utils/Validation");
 const Console = require("../utils/Console")

 const InputView = {
   async readCarName() {
    const carName = await Console.readline(MESSAGE.INPUT_CARNAME)
    if (!Validation.carNameValidate(carName)) return this.readCarName()
    return carName.split(',')
   },

   async readNumber() {
    const tryNumber = await Console.readline(MESSAGE.INPUT_TRYNUMBER)
    if (!Validation.tryNumberValidate(tryNumber)) return this.readNumber(tryNumber);
    return tryNumber
   },
 };

module.exports = InputView;
