const { ERROR, NUMBER } = require("../utils/Constant");

const Validation = {
    carNameValidate(names) {
        const isValidation = names.split(',').every(name => name.length <= NUMBER.NAME_LENGTH);
        if (!isValidation) console.log(ERROR.INPUT_NAME);

        return isValidation;
    },

    tryNumberValidate(tryNumber) {
        const isNumberValidation = !(isNaN(tryNumber) || tryNumber <= 0)
        if (!isNumberValidation) console.log(ERROR.INPUT_TRYNUMBER);

        return isNumberValidation
    },
}

module.exports = Validation;