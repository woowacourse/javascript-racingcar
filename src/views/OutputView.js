class OutputView{
    printResultHeader(){
        console.log("실행 결과");
    }
    
    printRaceResult(carList){
        carList.forEach((car) => {
            console.log(`${car.name} : ${"-".repeat(car.position)}`);
        });
    }

    printWinners(winners) {
        console.log(`최종 우승자: ${winners.join(', ')}`);
    }

    printNewLine(){
        console.log();
    }
}

export default OutputView;