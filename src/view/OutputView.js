const Constants = require("../Constants")

const OutputView = {

    outputResultTitle() {
        console.log(Constants.BLANK)
        console.log(Constants.RESULT_TITLE);
    },

    outputRoundResult(cars) {
        cars.forEach(car => {
            console.log(`${car.getCarName()} : ${Constants.POSITION_BAR.repeat(car.getScore())}`);
        });
        console.log(Constants.BLANK)
    },

    outputWinner(winners) {
        console.log(`${winners.join(", ")}${Constants.RESULT_MASSEGE}`);
    },

    askCarName() {
        console.log(Constants.INPUT_CAR_MASSEGE);
    },

    askRound() {
        console.log(Constants.INPUT_ROUND_MASSEGE); 
    }
    
}

module.exports = OutputView;