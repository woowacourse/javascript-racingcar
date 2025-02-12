class Validate {
    isEmpty(input) {
        if(!input.trim())
            throw new Error("[ERROR] 공백이 입력되었습니다.");
    }

    carNameLength(input){
        const names = input.split(',');
        names.forEach(name => {
            if(name.trim().length > 5)
                throw new Error("[ERROR] 이름 글자수가 5자를 초과하였습니다.");
        });
    }

    isNumber(input) {
        if(Number.isNaN(input)) {
            throw new Error("[ERROR] 숫자가 아닙니다.");
        }
    }

    isPositiveNumber(input) {
        if(input < 1) {
            throw new Error("[ERROR] 0 이하의 숫자 입니다.");
        }
    }
  
    isInteger(input) {
        if(!Number.isInteger(input))   {
            throw new Error("[ERROR] 정수가 아닙니다.");
        }
    }
}
export default Validate;