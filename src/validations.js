const { DOMAIN, MESSAGE } = require("./Constant");

const Validations = {
    carNameLengthMax(carNames) {
        carNames.forEach((name) => {
            if (name.length > DOMAIN.CAR_NAME_MAX) {
                throw new Error(MESSAGE.ERROR_CAR_LENGTH);
            }
        });
    },

    carNameLengthMin(carNames) {
        carNames.forEach((name) => {
            if (name.length <= DOMAIN.CAR_NAME_MIN) {
                throw new Error(MESSAGE.ERROR_CAR_NONAME);
            }
        });
    },

    roundRange(num) {
        if (!Number.isInteger(num) || num < DOMAIN.ROUND_MIN) {
            throw new Error(MESSAGE.ERROR_ROUND);
        }
    },
};

module.exports = Validations;
