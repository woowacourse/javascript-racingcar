class Validate {
  carNameLength(carName, limit) {
    return carName.length <= limit && carName.length > 0;
  }
}

export default Validate;
