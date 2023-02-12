const ResultContainer = require("../model/ResultContainer");
const Console = require("./utils/Console");
const {OUTPUT_MESSAGE} = require("./constants/message")
class OutputView {
  printResult(finalResult) {
    if (!finalResult instanceof ResultContainer) {
      throw new Error(`TypeError`);
    }
    
    console.log(this.getFinalResultMessage(finalResult));
  }

  getFinalResultMessage(finalResult) {
    return `${OUTPUT_MESSAGE.result}\n${this.getRoundResultMessage(finalResult.roundResultList)}${this.getWinnerMessage(finalResult.winnerList)}`
  }

  getRoundResultMessage(roundResultList) {
    return roundResultList.reduce((message, roundResult) => {
  
      roundResult.forEach((score, car) => {
        message += `${car}: ${'-'.repeat(score)}\n`;
      })

      return message + '\n'
    },'')
  }

  getWinnerMessage(winnerList) {
    return winnerList.join(', ') + OUTPUT_MESSAGE.winner
  }

  printError(error) {
    console.log(error.message)
  }

  close() {
    Console.close();
  }
}

module.exports = OutputView;
