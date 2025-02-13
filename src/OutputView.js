class OutputView {
    printErrorMessage(errorMessage){
        console.log(`${errorMessage}\n`);
    }

    printResultMessage(){
        console.log("\n실행 결과");
    }

    printOneRoundResult(cars){
        cars.forEach(car => {
            console.log(`${car.name} : ${'-'.repeat(car.position)}`);
        });
        console.log();
    }

    printWinners(winners){
        console.log(`최종 우승자: ${winners.join(', ')}`);
    }
}

export default OutputView;