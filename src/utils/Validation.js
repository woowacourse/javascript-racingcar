const { ERROR, CAR_MAX_NAME_LENGTH } = require("../utils/Constant");

const Validation = {
  carNameValidate(names) {
    const isValidation = names
      .split(",")
      .every((name) => name.length <= CAR_MAX_NAME_LENGTH);
    if (!isValidation) this.errorPrint(ERROR.CARNAME_OVER_MAX);

    return isValidation;
  },

  tryNumberValidate(tryNumber) {
    if (isNaN(tryNumber) || tryNumber <= 0) {
      this.errorPrint(ERROR.TRYNUMBER_UNDER_MIN);
      return false;
    }

    return true;
  },

  errorPrint(message) {
    console.log(message);
  },
};

module.exports = Validation;
