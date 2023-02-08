const readline = require("readline");
const CONSTANT = require("./Constant");

const inputView = {
    inputCarName(callback) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on("line", (line) => {
            rl.close()
            callback(line)
        });
    },

    inputRound(callback) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on("line", (line) => {
            callback(line)
            rl.close();
        });
    }
}




module.exports = inputView
