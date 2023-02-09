const CONSTANT = require("./Constant");

const validations = {

    validateCarNameLength(carNames) {
        carNames.forEach(name => {
            if (name.length > CONSTANT.CAR_NAME_MAX) {
                throw new Error(CONSTANT.ERROR_CAR_LENGTH)
            } 
        });
    },

    validateIsCarName(carNames) {
        carNames.forEach(name => {
            if (name.length <= CONSTANT.CAR_NAME_MIN) {
                throw new Error(CONSTANT.ERROR_CAR_NONAME)
            }
        });
    },

    validateRound(num) {
        if (!Number.isInteger(num) || num <= 0) {
            throw new Error(CONSTANT.ERROR_ROUND);
        }
    }
}


module.exports = validations;