import { testCorrectValue, testIncorrectValue } from '../utils/test_value.js';

const INPUT = '.car-name-input';
const BTN = '.car-name-btn';

describe('Car name input test', () => {
  before(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  it('Can check the number of car.', () => {
    testIncorrectValue(INPUT, BTN, '', 'alertMessage');
    testIncorrectValue(INPUT, BTN, 'a', 'alertMessage');
    testCorrectValue(INPUT, BTN, 'a,b');
  });

  it('Can check space.', () => {
    testCorrectValue(INPUT, BTN, 'name1,name2');
    testCorrectValue(INPUT, BTN, 'name1, name2');
    testCorrectValue(INPUT, BTN, 'name1,n ame2');
    testCorrectValue(INPUT, BTN, 'name1,name2 ');
    testCorrectValue(INPUT, BTN, 'name1, n ame2 ');
  });

  it('Can check length.', () => {
    testIncorrectValue(INPUT, BTN, 'a,', 'alertMessage');
    testIncorrectValue(INPUT, BTN, 'a,name11', 'alertMessage');
    testCorrectValue(INPUT, BTN, 'a,b');
    testCorrectValue(INPUT, BTN, 'name1, name2');
  });

  it('Can check character.', () => {
    testIncorrectValue(INPUT, BTN, 'a, ㄱ', 'alertMessage');
    testIncorrectValue(INPUT, BTN, 'a, !', 'alertMessage');
    testIncorrectValue(INPUT, BTN, 'a, 🙂', 'alertMessage');
    testIncorrectValue(INPUT, BTN, 'a, 汉', 'alertMessage');
    testCorrectValue(INPUT, BTN, 'a, 가힣');
    testCorrectValue(INPUT, BTN, 'a, az');
    testCorrectValue(INPUT, BTN, 'a, 09');
    testCorrectValue(INPUT, BTN, 'a, 테스트a1');
  });

  it('Can check overlap.', () => {
    testIncorrectValue(INPUT, BTN, 'a,a', 'alertMessage');
    testIncorrectValue(INPUT, BTN, 'ab,a b', 'alertMessage');
  });
});
