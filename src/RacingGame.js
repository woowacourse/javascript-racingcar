import { haveMiddleBlank, exceedMaxLength, isPositive } from './validation.js';

const $ = (selector) => document.querySelector(selector);

export default class RacingGame {
    constructor() {
        this.setEvent();
        this.initTryCntEvent();
    }

    setEvent() {
        $('#car-name-submit-button').addEventListener('click', () => {
            const carNames = $('#car-name-input').value.split(',');
            if (haveMiddleBlank(carNames)) return alert('자동차 이름에 공백이 들어갈 수 없습니다.');
            if (exceedMaxLength(carNames)) return alert('자동차 이름은 5자 이하입니다.');
        });
    }

    initTryCntEvent() {
        $('#try-count-submit-button').addEventListener('click', () => {
            const tryCnt = Number($('#try-count-input').value);
            if (!Number.isInteger(tryCnt)) return alert('자연수를 입력해주세요.');
            if (!isPositive(tryCnt)) return alert('양수를 입력해주세요.');
        });
    }
}
