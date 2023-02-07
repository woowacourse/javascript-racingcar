const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  readCarNames(callback) {
    MissionUtils.Console.readLine("경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).", callback);
  },
};

module.exports = InputView;
