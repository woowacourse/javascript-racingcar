const MESSAGE = {
    RACING_RESULT_TITLE: '\n실행 결과',
    WINNER_RESULT_TITLE: '최종 우승자:',
}

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