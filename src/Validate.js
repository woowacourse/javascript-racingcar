const ERROR_MESSAGE = {
    IS_EMPTY:'[ERROR] 공백이 입력되었습니다.',
    CAR_NAME_LENGTH:'[ERROR] 이름 글자수가 5자를 초과하였습니다.',
    IS_NUMBER:'[ERROR] 숫자가 아닙니다.',
    IS_POSITIVE_NUMBER:'[ERROR] 0 이하의 숫자 입니다.',
    IS_INTEGER:'[ERROR] 정수가 아닙니다.',
}
const MAX_NAME_LENGTH = 5;

class Validate {
    isEmpty(input) {
        if(!input.trim())
            throw new Error(ERROR_MESSAGE.IS_EMPTY);
    }

    carNameLength(input){
        const names = input.split(',');
        names.forEach(name => {
            if(name.trim().length > MAX_NAME_LENGTH)
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
