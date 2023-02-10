const { MESSAGE } = require("./Constant");
const RL = require("./Readline");

const OutputView = {
    resultTitle() {
        console.log(MESSAGE.RESULT_TITLE);
    },

    roundResult([carName, carScore]) {
        console.log(`${carName} : ${"-".repeat(carScore)}`);
    },

    totalWinnerResult(winners) {
        console.log(`${winners.join(", ")}${MESSAGE.RESULT_WINNER} `);
        RL.close();
    },

    noneWinnerResult() {
        console.log(MESSAGE.NONE_WINNER);
        RL.close();
    },
};

module.exports = OutputView;
