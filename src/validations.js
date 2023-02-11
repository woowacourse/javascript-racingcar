const Constants = require("./Constants");

const Validations = {

    checkCarMaxName(carNames) {
        carNames.forEach(name => {
            if (name.length > Constants.CAR_NAME_MAX) {
                throw new Error(Constants.ERROR_CAR_LENGTH);
            } 
        });
    },

    checkCarMinName(carNames) {
        carNames.forEach(name => {
            if (name.length <= Constants.CAR_NAME_MIN) {
                throw new Error(Constants.ERROR_CAR_NONAME);
            };
        });
    },

    checkRound(num) {
        if (!Number.isInteger(num) || num <= 0) {
            throw new Error(Constants.ERROR_ROUND);
        };
    }
}


module.exports = Validations;