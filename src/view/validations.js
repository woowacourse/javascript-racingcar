const { MESSAGE } = require("./Constant_view");
const { RACING } = require("../domain/Constant_domain");

const Validations = {
    carNameLengthMax(carNames) {
        carNames.forEach((name) => {
            if (name.length > RACING.CAR_NAME_MAX) {
                throw new Error(MESSAGE.ERROR_CAR_LENGTH);
            }
        });
    },

    carNameLengthMin(carNames) {
        carNames.forEach((name) => {
            if (name.length <= RACING.CAR_NAME_MIN) {
                throw new Error(MESSAGE.ERROR_CAR_NONAME);
            }
        });
    },

    roundRange(num) {
        if (!Number.isInteger(num) || num < RACING.ROUND_MIN) {
            throw new Error(MESSAGE.ERROR_ROUND);
        }
    },
};

module.exports = Validations;
