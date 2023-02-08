const CONSTANT = require("./Constant")

const OutputView = {
    outputResultTitle() {
        console.log(CONSTANT.RESULT_TITLE)
    },

    outputRoundResult(cars) {
        for (let i = 0; i < cars.length; i++) {
            console.log(`${cars[i].getCarName()} : ${"-".repeat(cars[i].getScore())}`)
        }
        console.log("")
    },

    outputWinner(winners) {
        console.log(`${winners.join(", ")}${CONSTANT.RESULT_MASSEGE} `)
    },

    askCarName() {
        console.log(CONSTANT.INPUT_CAR_MASSEGE);
    },

    askRound() {
        console.log(CONSTANT.INPUT_ROUND_MASSEGE); 
    },
}

module.exports = OutputView