import InputView from '../ui/InputView.js';
import OutputView from '../ui/OutputView.js';
import Car from './Car.js';
import Validate from '../utils/Validate.js'
import getRandomNumber from '../utils/Random.js';

class RacingcarManager{
    #inputView
    #outputView
    #validate

    constructor(){
        this.#inputView = new InputView();
        this.#outputView = new OutputView();
        this.#validate = new Validate();
    }

    async start(){
        const carNames = await this.#getCarNames();
        const cars = this.createCars(carNames);
        const attempts = await this.#getAttempts();
        this.roundOfRacing(cars, attempts);
        const winners = this.getWinners(cars);
        this.#outputView.printWinners(winners);
    }
    
    async #getCarNames()  {
        while(true) {
            try {
                const carNames = await this.#inputView.readCarNames();
                this.#validate.isEmpty(carNames);
                this.#validate.isValidCarNames(carNames);
                return carNames.split(',');
            } catch (error) {
                this.#outputView.printErrorMessage(error.message);
            }
        }
    }

    createCars(carNames){
        return carNames.map(name => new Car(name));
    }

    async #getAttempts()  {
        while(true) {
            try {
                const attempts = await this.#inputView.readAttempts();
                this.#validateAttempts(attempts);
                return Number(attempts);
            } catch (error) {
                this.#outputView.printErrorMessage(error.message);
            }
        }
    }

    #validateAttempts(attempts) {
        try {
            this.#validate.isEmpty(attempts);
            const numAttempts = Number(attempts);
            this.#validate.isNumber(numAttempts);
            this.#validate.isPositiveNumber(numAttempts);
            this.#validate.isInteger(numAttempts);
        } catch (error) {
            throw error;
        }
    }
    
    oneRound(cars){
        cars.forEach(car => {
            car.move(getRandomNumber());            
        });
    }

    roundOfRacing(cars, attempts){
        this.#outputView.printResultMessage();
        for(let i = 0; i< attempts; i++) {
            this.oneRound(cars);
            this.#outputView.printOneRoundResult(cars);
        }
    }

    getMaxPosition(cars) {
        const hasMaxPositionCar = cars.reduce((prev, value) => {
            if(prev.position >= value.position){
                return prev;
            } else {
                return value;
            }  
        });
        return hasMaxPositionCar.position;
    }

    getWinners(cars) {
        const maxPositon = this.getMaxPosition(cars);
        const winners = [];
        cars.forEach(car => {
            if(car.position === maxPositon){
                winners.push(car.name);
            }
        });
        return winners;
    }
}

export default RacingcarManager;
