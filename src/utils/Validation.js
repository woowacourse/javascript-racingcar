const { ERROR } = require("../utils/Constant");

const Validation = {
    carNameValidate(names) {
        const isValidation = names.split(',').every(name => name.length <= ERROR.MAX_NAME_LENGTH);
        if (!isValidation) this.errorPrint(ERROR.INPUT_NAME);

        return isValidation;
    },

    tryNumberValidate(tryNumber) {
        if (isNaN(tryNumber) || tryNumber <= 0) {
            this.errorPrint(ERROR.INPUT_TRYNUMBER);
            return false;
        }

        return true;
    },

    errorPrint(message) {
        try {
            throw new Error(message);
        } catch (message) {
            console.log(message);
        }
    }
}

module.exports = Validation;