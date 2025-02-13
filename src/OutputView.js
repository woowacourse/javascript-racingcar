class OutputView {
    printErrorMessage(errorMessage){
        console.log(errorMessage);
    }

    printResultMessage(){
        console.log("실행 결과");
    }

    printOneRoundResult(cars){
        cars.forEach(car => {
            console.log(`${car.name} : ${'-'.repeat(car.position)}`);
        });
        console.log();
    }
}

export default OutputView;
