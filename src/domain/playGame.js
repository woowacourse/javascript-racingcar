import playRound from './playRound.js'

const playGame = (cars, rounds) => {
    for (let i = 0; i < rounds; i++){
      playRound(cars);
    }
}

export default playGame