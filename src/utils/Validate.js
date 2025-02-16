import RacingcarConstants from "../constants/RacingCarConstants.js";
import ERROR_MESSAGE from "../constants/RacingErrorMessage.js";

class Validate {
    isEmpty(input) {
        if(!input.trim())
            throw new Error(ERROR_MESSAGE.IS_EMPTY);
    }

    isValidCarNames(input){
        const names = input.split(',');
        names.forEach(name => {
            this.isEmpty(name)
            if(name.trim().length > RacingcarConstants.MAX_NAME_LENGTH)
                throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH);
        });
    }

    isEnoughCars(carNames) {
        if(carNames.length < 2) {
            throw new Error(ERROR_MESSAGE.NOT_ENOUGH_CARS);
        }
    }

    isNumber(input) {
        if(Number.isNaN(input)) {
            throw new Error(ERROR_MESSAGE.IS_NUMBER);
        }
    }

    isPositiveNumber(input) {
        if(input < 1) {
            throw new Error(ERROR_MESSAGE.IS_POSITIVE_NUMBER);
        }
    }
  
    isInteger(input) {
        if(!Number.isInteger(input))   {
            throw new Error(ERROR_MESSAGE.IS_INTEGER);
        }
    }

    validateCarNames(carNamesInput) {
        this.isEmpty(carNamesInput);
        this.isValidCarNames(carNamesInput);
    }

    validateEnoughCars(carNames){
        this.isEnoughCars(carNames);
    }

    validateAttempts(attempts) {
        try {
            this.isEmpty(attempts);
            const numAttempts = Number(attempts);
            this.isNumber(numAttempts);
            this.isPositiveNumber(numAttempts);
            this.isInteger(numAttempts);
        } catch (error) {
            throw error;
        }
      }
}
export default Validate;
