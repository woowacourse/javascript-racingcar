class CarNameValidator {
    
    valiateCarNameLength(carNames) {
        for(let carName of carNames) {
            if(carName.length < 1 || carNames.length > 5) {
                throw new Error('자동차 이름은 1이상 5이하여야 합니다.');
            }
        }
    }
}

export default CarNameValidator;