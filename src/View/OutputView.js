export default class OutputView {
    printCarCurrentDistance(car){
        const name = car.getName();
        const distance = car.getDistance();

        console.log(`${name} : ${"-".repeat(distance)}`)
    }

    printWinner(cars) {
        // car => maxDistance, winners
        const maxDistance = Math.max(...cars.map(car => car.getDistance()))
        const text = "최종 우승자 : "

        if(maxDistance){
            //TODO: winners 출력
            const winners = cars.filter(car =>
                 car.getDistance() === maxDistance ? true : false
               
            )
            console.log(text + winners.map(car => car.getName()).join(", "))
          
        }
        if(!maxDistance) {
            console.log(text + '없음')
        }
    }

    printBlank() {
        console.log(``)
    }

    printResultTitle() {
        console.log('실행 결과')
    }
}