const inputValidator = {
  MIN_CAR_NAME_LENGTH: 1,
  MAX_CAR_NAME_LENGTH: 5,

  isValidCarNameList(carNameList) {
    return this.isCarNameListInRange(carNameList) && this.isCarNameListNotDuplicated(carNameList);
  },

  isCarNameListInRange (carNameList) {
    return carNameList.every((carName) => (carName.length >= this.MIN_CAR_NAME_LENGTH)  
    && (carName.length <= this.MAX_CAR_NAME_LENGTH));
    
  },

  isCarNameListNotDuplicated (carNameList) {
    return new Set(carNameList).size === carNameList.length;
  }
}

inputValidator.isValidCarNameList(['pobi', 'ukko', 'heavy']) //?