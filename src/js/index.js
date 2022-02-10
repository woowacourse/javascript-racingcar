// - #### 자동차 이름 입력 받기
// - 자동차 이름을 쉼표를 기준으로 구분한다.
// - 자동차 이름 양 끝단의 공백을 제거한다.
// - 사용자가 잘못된 입력 값을 작성한 경우 alert을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.

// - #### 자동차 이름 유효성 검증하기
// - 자동차 이름 길이가 1 이상 5 이하인지 검증한다.
// - 자동차 이름에 중복이 있는지 검증한다.

class RacingCarGame {
  constructor() {
    this.$carNameInput = document.querySelector('#car-name-input');
    this.$carNameButton = document.querySelector('#car-name-button');
    this.carList = [];
  }

  trimStringArray(array) {
    return array.map((string) => string.trim());
  }

  splitCarNames() {
    return this.$carNameInput.value.split(',');
  }

  main() {
    this.$carNameButton.addEventListener('click', (e) => {
      e.preventDefault();

      const carNameList = this.trimStringArray(this.splitCarNames());

      if (!carNameList.every((name) => name.length >= 1 && name.length <= 5)) {
        alert('자동차 이름은 1자 이상 5자 이하여야 합니다.');
      }

      if (carNameList.length !== new Set(carNameList).size) {
        alert('중복되는 자동차 이름은 입력할 수 없습니다.');
      }

      this.carList = carNameList;
    });
  }
}

const racingCarGame = new RacingCarGame();
racingCarGame.main();

// - #### 자동차 생성하기
// - 입력받은 자동차 이름들로 자동차를 생성한다.

// - #### 레이싱 횟수 입력 받기
// - 사용자가 잘못된 입력 값을 작성한 경우 alert을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.

// - #### 레이싱 횟수 유효성 검증하기
// - 양의 정수인지 검증한다.

// - *레이싱 횟수 최대값*보다 작은지 검증한다. (임의로 100으로 정함.)
//   레이싱 횟수 범위가 요구사항에 명시되어 있지 않았기 때문에 *레이싱 횟수 최댓값*을 100으로 정했습니다.

// - #### 레이스 진행하기
// - 입력받은 횟수만큼 레이스를 진행한다.
// - 0에서 9 사이에서 무작위 값을 생성한다.
// - 무작위 값이 4 이상일 경우 자동차를 전진시킨다.
// - 마지막 레이스의 결과로 최종 우승자를 구한다.
// - #### 결과 렌더링하기

// - 우승자가 여러 명일 수 있다.
// - 우승자가 여러 명일 경우 쉼표를 이용하여 구분한다.
