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
        console.log(cars);
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
}
export default RacingcarManager;
