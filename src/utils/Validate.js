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
}
export default Validate;
