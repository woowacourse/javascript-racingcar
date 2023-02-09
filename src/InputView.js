const Console = require('./utils/Console');
const { readLine } = require('./utils/Console');
const InputView = {
  async readCarNames() {
    const bar = await Console.read(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).'
    );
    return bar;
  },

  async readTryCount() {
    const bar = await Console.read('시도할 회수는 몇회인가요?');
    return bar;
  },
};

module.exports = InputView;
