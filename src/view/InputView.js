export const InputView = {
  async getCarName() {
    const nameInput = await readLineAsync(SystemMessage.CAR_NAME_MESSAGE);
  },
  async getRound() {
    const round = await readLineAsync(SystemMessage.ROUND_MESSAGE);
  },
};
