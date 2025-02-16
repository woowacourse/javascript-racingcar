import MESSAGE from '../constants/RacingMessage.js';

class OutputView {
    printErrorMessage(errorMessage){
        console.log(`${errorMessage}\n`);
    }

    printResultMessage(){
        console.log(MESSAGE.RACING_RESULT_TITLE);
    }

    printOneRoundResult(cars){
        cars.forEach(car => {
            console.log(`${car.name} : ${'-'.repeat(car.position)}`);
        });
        console.log();
    }

    printWinners(winners){
        console.log(`${MESSAGE.WINNER_RESULT_TITLE} ${winners.join(', ')}`);
    }
}

export default OutputView;
