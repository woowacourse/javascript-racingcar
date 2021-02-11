// 랜덤 값 만들기 ( 0~9)
class Util {
  generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getQuerySelector(selector) {
    return document.querySelector(selector);
  }
}

export const {generateRandomNumber, getQuerySelector} = new Util();
