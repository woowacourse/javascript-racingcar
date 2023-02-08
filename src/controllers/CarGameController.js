const CarGame = require('../models/CarGame');
const CarNameParser = require('../utils/carNameParser');
const Validator = require('../utils/Validator');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

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
            try {
                const parseResult = CarNameParser(input);
                Validator.validateLength(parseResult);
                Validator.validateOverLap(parseResult);
                Validator.validateInvalidInput(parseResult);
                this.#carGame.initCarList(parseResult);
            } catch(error){
                OutputView.printError(error.message);
                this.readCarNames();
            }
        })
    }
}

module.exports = CarGameController;