class CarController {
  async getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
}

export default CarController;
