import playRound from './playRound.js'
import {printRoundScore} from '../view/output.js'

const playGame = (carNames, rounds) => {
    // 초기화
    let cars = []
    for (let name of carNames){
        cars.push({name, count: 0})
    }

    console.log('\n실행 결과')
    for (let i = 0; i < rounds; i++){
      const updatedCars = playRound(cars);
      cars = updatedCars
      // 각 라운드 결과 출력
      printRoundScore(cars)
    }

    // 최종 우승자 출력 
}

export default playGame