class Validate {
  carNameLength(carName, limit) {
    if (carName.length > limit || carName.length <= 0) {
  
      throw new Error();
    }
  }
}

export default Validate;
