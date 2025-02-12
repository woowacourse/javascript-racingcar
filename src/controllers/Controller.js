import Input from "../views/Input.js";

class Controller {
  constructor() {}

  /**
   * 전체 로직 관리하는 메서드
   *
   * 각 자동차별로 인스턴스 생성해서 각 경주별 시도 횟수 관리
   */
  async play() {
    await this.#readAndValidateInputs();
  }

  async #readAndValidateInputs() {
    const names = await Input.carName();
    console.log(names);
    // const tryCount = await Input.tryCount();

    // return { names, tryCount };
  }
}

export default Controller;
