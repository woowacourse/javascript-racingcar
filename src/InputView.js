const readline = require("readline");
const validations = require("./validations");

const inputView = {

    inputCarName(callback) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        rl.on("line", (line) => {
            rl.close()
            callback(line)
        });
    },

    inputRound(callback) {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            })
        rl.on("line", (line) => {
            try {
                rl.close();
                validations.validateRound(+line);
                callback(+line)
            } catch (e) {
                console.log(e.message);
                this.inputRound(callback);
            }
        })
    },
}




module.exports = inputView
