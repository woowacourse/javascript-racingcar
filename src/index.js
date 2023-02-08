// const readline = require("readline");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class App {
    constructor() {

    }

    play() {
        rl.question("경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n", answer => {
            let val = answer.split(',');
            console.log(val);
            this.inputNumber();
        });
    }

    inputNumber() {
        rl.question("시도할 회수는 몇회인가요?\n", answer => {
            let val2 = Number(answer);
            console.log(val2);

            rl.close();
        });
    }


}

const app = new App();
app.play();
module.exports = App