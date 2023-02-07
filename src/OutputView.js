const CONSTANT = require("./Constant")

const OutputView = {
    outputResultTitle() {
        console.log(CONSTANT.RESULT_TITLE)
    },

    outputRoundResult(cars, scores) {
        for (let i = 0; i < cars.length; i++) {
            console.log(`${cars[i]} : ${"-".repeat(scores[i])}`)
        }
    },

    outputWinner(winners) {
        console.log(`${winners.join(", ")}${CONSTANT.RESULT_MASSEGE} `)
    }
}

module.exports = OutputView