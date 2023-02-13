const { MESSAGE } = require("./Constant_view");
const { RACING } = require("../domain/Constant_domain");

const Validations = {
    checkNameLength(carNames) {
        carNames.forEach((name) => {
            if (name.length > RACING.MAX_CAR_NAME) {
                throw new Error(MESSAGE.ERROR_CAR_LENGTH);
            }
        });
    },

    checkEmptyName(carNames) {
        carNames.forEach((name) => {
            if (name.length <= RACING.MIN_CAR_NAME) {
                throw new Error(MESSAGE.ERROR_CAR_NONAME);
            }
        });
    },

    checkRoundCount(num) {
        if (!Number.isInteger(num) || num < RACING.MIN_ROUND) {
            throw new Error(MESSAGE.ERROR_ROUND);
        }
    },
};

module.exports = Validations;
