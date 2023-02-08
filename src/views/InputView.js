const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const InputView = {
    inputCarName(carsName) {
        rl.question("경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n", answer => {
            carsName(answer);
        });
    },

    inputNumber(tryNumber) {
        rl.question("시도할 회수는 몇회인가요?\n", answer => {
            tryNumber(answer);
        });
    }
}

module.exports = InputView