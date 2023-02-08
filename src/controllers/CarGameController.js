const CarGame = require('../models/CarGame');
const CarNameParser = require('../utils/carNameParser');
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
            const parseResult = CarNameParser(input);
            // 유효성검사
            this.#carGame.initCarList(parseResult);
        })
    }
   
}

module.exports = CarGameController;