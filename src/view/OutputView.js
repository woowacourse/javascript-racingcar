const ResultContainer = require("../model/ResultContainer");
const Console = require("./utils/Console");
const {OUTPUT_MESSAGE, OUTPUT_SIGNAL} = require("./utils/constants/message")
class OutputView {
  static printResult(finalResult) {
    if (!finalResult instanceof ResultContainer) {
      throw new Error(`TypeError`);
    }
    
    console.log(this.#getFinalResultMessage(finalResult));
  }

  static #getFinalResultMessage(finalResult) {
    return `${OUTPUT_MESSAGE.result}\n${this.#getRoundResultMessage(finalResult.roundResultList)}${this.#getWinnerMessage(finalResult.winnerList)}`;
  }

  static #getRoundResultMessage(roundResultList) {
    return roundResultList.reduce((message, roundResult) => {
  
      roundResult.forEach((score, car) => {
        message += `${car}: ${OUTPUT_SIGNAL.carMovement.repeat(score)}\n`;
      })

      return message + '\n';
    },'')
  }

  static #getWinnerMessage(winnerList) {
    return winnerList.join(', ') + OUTPUT_MESSAGE.winner;
  }

  static printError(error) {
    console.log(error.message);
  }

  static close() {
    Console.close();
  }
}

module.exports = OutputView;
