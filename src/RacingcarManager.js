import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Validate from './Validate.js'
import Car from './Car.js';

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
    }
    
    async #getCarNames()  {
        while(true) {
            try {
                const carNames = await this.#inputView.readCarNames();
                this.#validate.isEmpty(carNames);
                this.#validate.carNameLength(carNames);
                return carNames.split(',');
            } catch (error) {
                this.#outputView.printErrorMessage(error);
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
                this.#outputView.printErrorMessage(error);
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
}
export default RacingcarManager;
