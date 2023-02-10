const validations = require("./Validations");
const { MESSAGE } = require("./Constant");
const RL = require("./Readline");

const InputView = {
    inputCarName(callback) {
        RL.question(MESSAGE.INPUT_CAR_NAME, (input) => {
            const carNames = input.split(",");
            this.tryCatchCarName(carNames, callback);
        });
    },

    tryCatchCarName(carNames, callback) {
        try {
            validations.carNameLengthMax(carNames);
            validations.carNameLengthMin(carNames);
            callback(carNames)
        } catch (e) {
            console.log(e.message);
            this.inputCarName(callback);
        }
    },

    inputRound(callback) {
        RL.question(MESSAGE.INPUT_ROUND_COUNT, (round) => {
            this.tryCatchRound(round, callback)
        })
    },

    tryCatchRound(round, callback) {
        try {
            validations.roundRange(+round);
            callback(+round)
        } catch (e) {
            console.log(e.message);
            this.inputRound(callback);
        }
    },

}




module.exports = InputView
