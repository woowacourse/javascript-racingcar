const { ERROR, NUMBER } = require("../utils/Constant");

const Validation = {
    carNameValidate(names) {
        const isValidation = names.split(',').every(name => name.length <= NUMBER.NAME_LENGTH);
        if (!isValidation) console.log(ERROR.INPUT_NAME);

        return isValidation;
    },

    tryNumberValidate(tryNumber) {
        if (isNaN(tryNumber) || tryNumber <= 0) {
            console.log(ERROR.INPUT_TRYNUMBER);
            return false;
        }

        return true;
    },
}

module.exports = Validation;