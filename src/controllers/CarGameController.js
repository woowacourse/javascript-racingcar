const CarGame = require('../models/CarGame');
const InputView = require('../views/InputView');

class CarGameController {
    #carGame;
    constructor() {
        this.#carGame = new CarGame();
    }
    
    playGame() {
        this.readCarNames();
    }

    readCarNames(){
        InputView.readCarName().then((input)=>{
            // 유틸함수 이용한 문자열 파싱
        })
    }
   
}

module.exports = CarGameController;