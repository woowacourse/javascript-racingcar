const inputValidator = {
  MIN_CAR_NAME_LENGTH: 1,
  MAX_CAR_NAME_LENGTH: 5,

  validateCarNameList(carNameList) {
    if (!this.isCarNameListInRange(carNameList)) {
      throw new Error(`[ERROR] 자동차 이름은 1글자부터 5글자 사이여야 합니다.`)
    }
    
    if (!this.isCarNameListNotDuplicated(carNameList)) {
      throw new Error(`[ERROR] 자동차 이름 중에 중복이 있습니다. \n`)
    }
  },

  isCarNameListInRange (carNameList) {
    return carNameList.every((carName) => (carName.length >= this.MIN_CAR_NAME_LENGTH)  
    && (carName.length <= this.MAX_CAR_NAME_LENGTH));
    
  },

  isCarNameListNotDuplicated (carNameList) {
    return new Set(carNameList).size === carNameList.length;
  }
}