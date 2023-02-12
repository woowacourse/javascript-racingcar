const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const InputView = {

    readUserInput(callback, inputMessage) {
        rl.question(inputMessage, (input) => {
            callback(input);
        });
    }

}

module.exports = InputView;
