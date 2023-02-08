const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  constructor() {}

  play() {
    OutputView.print('자동차 경주 게임을 시작합니다.');
    this.setCars();
  }

  async setCars() {
    const input = await InputView.readline(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
    );
    const carNames = input.split(',');
    this.setWinningDistance();
  }

  async setWinningDistance() {
    const winningDistance = await InputView.readline('시도할 회수는 몇회인가요?');
  }

  showResult() {}

  showWinners() {}
}
module.exports = Controller;
