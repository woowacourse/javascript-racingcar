class isValidRandomNumber {
    static integer(value) {
        return Number.isInteger(value.min) && Number.isInteger(value.max);
    }

    static maxGreaterThanMin(value){
        return value.min<value.max;
    }
  }
  
export default isValidRandomNumber;