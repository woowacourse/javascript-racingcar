import playRound from './playRound.js'


const playGame = (carNames, rounds) => {
    // 초기화
    let cars = []
    for (let name of carNames){
        cars.push({name, count: 0})
    }

    console.log(cars);

    for (let i = 0; i < rounds; i++){
      cars = playRound(cars);
      // 각 라운드 결과 출력
    }

    // 최종 우승자 출력 
}

export default playGame