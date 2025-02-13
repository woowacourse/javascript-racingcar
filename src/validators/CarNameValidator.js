class CarNameValidator {
    valiateNames(carNames) {
        this.#valiateCarNameLength(carNames);
        this.#validateDuplicateName(carNames);
        this.#validateSpecialSymbol(carNames);
    }

    #valiateCarNameLength(carNames) {
        for(let carName of carNames) {
            if(carName.length < 1 || carName.length > 5) {
                throw new Error('자동차 이름은 1이상 5이하여야 합니다.');
            }
        }
    }

    #validateDuplicateName(carNames){
        const nameSet = new Set()
        for(let carName of carNames){
            if(nameSet.has(carName)){
                throw new Error('자동차 이름은 중복될 수 없습니다.');
            }
            nameSet.add(carName);
        }
    }

    #validateSpecialSymbol(carNames){
        const regExp = /^[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]$/g;
        
        for(let carName of carNames){
            if(regExp.test(carName)){
                throw new Error('자동차 이름은 특수기호 만으로 구성될 수 없습니다.');
            }
        }
    }
}

export default CarNameValidator;