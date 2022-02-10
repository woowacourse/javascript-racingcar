import haveBlank from './validation.js';

const $ = (selector) => document.querySelector(selector);

export default class RacingGame {
    constructor() {
        this.setEvent();
    }

    setEvent() {
        $('#car-name-submit-button').addEventListener('click', () => {
            const carNames = $('#car-name-input').value.split(',');
            if (haveBlank(carNames)) alert('자동차 이름에 공백이 들어갈 수 없습니다.');
        });
    }
}
