import { testCorrectValue, testIncorrectValue } from '../utils/test_value.js';
import { CAR_INPUT, CAR_BTN } from '../../src/js/constants/index.js';

describe('Car name input test', () => {
  before(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  it('Can check the number of car.', () => {
    testIncorrectValue(CAR_INPUT, CAR_BTN, '', 'alertMessage');
    testIncorrectValue(CAR_INPUT, CAR_BTN, 'a', 'alertMessage');
    testCorrectValue(CAR_INPUT, CAR_BTN, 'a,b');
  });

  it('Can check space.', () => {
    testCorrectValue(CAR_INPUT, CAR_BTN, 'name1,name2');
    testCorrectValue(CAR_INPUT, CAR_BTN, 'name1, name2');
    testCorrectValue(CAR_INPUT, CAR_BTN, 'name1,n ame2');
    testCorrectValue(CAR_INPUT, CAR_BTN, 'name1,name2 ');
    testCorrectValue(CAR_INPUT, CAR_BTN, 'name1, n ame2 ');
  });

  it('Can check length.', () => {
    testIncorrectValue(CAR_INPUT, CAR_BTN, 'a,', 'alertMessage');
    testIncorrectValue(CAR_INPUT, CAR_BTN, 'a,name11', 'alertMessage');
    testCorrectValue(CAR_INPUT, CAR_BTN, 'a,b');
    testCorrectValue(CAR_INPUT, CAR_BTN, 'name1, name2');
  });

  it('Can check character.', () => {
    testIncorrectValue(CAR_INPUT, CAR_BTN, 'a, ㄱ', 'alertMessage');
    testIncorrectValue(CAR_INPUT, CAR_BTN, 'a, !', 'alertMessage');
    testIncorrectValue(CAR_INPUT, CAR_BTN, 'a, 🙂', 'alertMessage');
    testIncorrectValue(CAR_INPUT, CAR_BTN, 'a, 汉', 'alertMessage');
    testCorrectValue(CAR_INPUT, CAR_BTN, 'a, 가힣');
    testCorrectValue(CAR_INPUT, CAR_BTN, 'a, az');
    testCorrectValue(CAR_INPUT, CAR_BTN, 'a, 09');
    testCorrectValue(CAR_INPUT, CAR_BTN, 'a, 테스트a1');
  });

  it('Can check overlap.', () => {
    testIncorrectValue(CAR_INPUT, CAR_BTN, 'a,a', 'alertMessage');
    testIncorrectValue(CAR_INPUT, CAR_BTN, 'ab,a b', 'alertMessage');
  });
});
