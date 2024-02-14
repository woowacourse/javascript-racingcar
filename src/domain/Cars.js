import Car from './Car';

class Cars {
  #cars;

  constructor(carNames) {
    this.#validateName(carNames);
    this.#cars = carNames.split(',').map(name => {
      return new Car(name);
    });
  }

  #validateName(carNames) {
    const nameRegex = new RegExp(/^[\w|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,5}(?:,[\w|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,5})*$/);
    if (!nameRegex.test(carNames)) throw new Error('자동차 이름 입력이 올바르지 않습니다');
  }
}
