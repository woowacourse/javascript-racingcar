class OuputView{
    printResultHeader(){
        console.log("실행 결과");
    }
    
    printRaceResult(carList){
        carList.array.forEach((car) => {
            console.log(`${car.name} : ${"-".repeat(car.position)}`);
        });
    }
}