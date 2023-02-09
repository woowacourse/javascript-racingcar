const readline = require("readline");
const validations = require("./validations");
const CONSTANT = require("./Constant");

const inputView = {

    inputCarName(callback) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        rl.question(CONSTANT.INPUT_CAR_MASSEGE, (line) => {
            rl.close()
            callback(line)
        }) ;
    },

    inputRound(callback) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        rl.question(CONSTANT.INPUT_ROUND_MASSEGE, (round) => {
            this.tryCatchRound(rl, round,callback)
        })
    },

    tryCatchRound(rl, round, callback) {
        try {
            rl.close();
            validations.validateRound(+round);
            callback(+round)
        } catch (e) {
            console.log(e.message);
            this.inputRound(callback);
        }
    },

}




module.exports = inputView
