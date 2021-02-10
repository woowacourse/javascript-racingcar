class RacingCarController {
  constructor() {
    this.model = new RacingCarModel();
    this.view = new RacingCarView();
  }

  getWinners(largestCount) {}

  goStop() {
    // 랜덤수 가져와서 전진 or 스톱 값
    // return T/F
  }

  startGame() {
    // 자동 횟수만큼 반복
    //// goStop cars 객체에 저장(+= 1)
  }

  manageCars() {
    // 유효한지 테스트, 자동차 set, showCount
  }

  manageCount() {
    // 유효한지 테스트, 횟수 set,  게임 스타트, showProcess,
  }

  manageProcess() {
    //  우승자 선정, showResult
  }

  reset() {}

  handleCars() {
    const $carBtn = document.querySelector("#car-btn");
    $carBtn.addEventListener("click", this.manageCars);
  }

  handleCount() {
    const $countBtn = document.querySelector("#count-btn");
    $countBtn.addEventListener("click", this.manageCount);
  }

  handleReset() {
    const $resetBtn = document.querySelector("#reset-btn");
    $resetBtn.addEventListener("click", this.reset);
  }
}
