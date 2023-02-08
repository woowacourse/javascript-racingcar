const OutputView = {
    printCarMove(cars) {
        console.log()
        for (let car of cars) {
            console.log(car.getName() + " : " + "-".repeat(car.getPosition()))
        }
    },

    printWinners(users) {
        const winners = users.join(", ");
        console.log(`\n${winners}가 최종 우승했습니다.`);
    }
}

module.exports = OutputView