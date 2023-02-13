const validations = require("../Validations");
const { MESSAGE } = require("./Constant_view");
const RL = require("./Readline");

const InputView = {
    inputCarName(callback) {
        RL.question(`${MESSAGE.INPUT_CAR_NAME}\n`, (input) => {
            const carNames = input.split(",");
            this.tryCatchCarName(carNames, callback);
        });
    },

    tryCatchCarName(carNames, callback) {
        try {
            validations.checkNameLength(carNames);
            validations.checkEmptyName(carNames);
            callback(carNames);
        } catch (e) {
            console.log(e.message);
            this.inputCarName(callback);
        }
    },

    inputRound(callback) {
        RL.question(`${MESSAGE.INPUT_ROUND_COUNT}\n`, (round) => {
            this.tryCatchRound(round, callback);
        });
    },

    tryCatchRound(round, callback) {
        try {
            validations.checkRoundCount(+round);
            callback(+round);
        } catch (e) {
            console.log(e.message);
            this.inputRound(callback);
        }
    },
};

module.exports = InputView;
