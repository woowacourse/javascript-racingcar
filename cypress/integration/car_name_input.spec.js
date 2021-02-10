import { testValue } from '../utils/test_value.js';
import {
  CAR_INPUT,
  CAR_BTN,
  ALERT_VALID_NUMBER_OF_CARS,
  ALERT_VALID_LETTER,
  ALERT_VALID_LENGTH,
  ALERT_OVERLAP,
} from '../../src/js/constants/index.js';

describe('Car name input test', () => {
  before(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  it('Can check the number of car.', () => {
    testValue(CAR_INPUT, CAR_BTN, '', ALERT_VALID_NUMBER_OF_CARS);
    testValue(CAR_INPUT, CAR_BTN, 'a', ALERT_VALID_NUMBER_OF_CARS);
    testValue(CAR_INPUT, CAR_BTN, 'a,b');
  });

  it('Can check space.', () => {
    testValue(CAR_INPUT, CAR_BTN, 'name1,name2');
    testValue(CAR_INPUT, CAR_BTN, 'name1, name2', ALERT_VALID_LETTER);
    testValue(CAR_INPUT, CAR_BTN, 'name1,n ame2', ALERT_VALID_LETTER);
    testValue(CAR_INPUT, CAR_BTN, 'name1,name2 ', ALERT_VALID_LETTER);
  });

  it('Can check length.', () => {
    testValue(CAR_INPUT, CAR_BTN, 'a,', ALERT_VALID_LENGTH);
    testValue(CAR_INPUT, CAR_BTN, 'a,name11', ALERT_VALID_LENGTH);
    testValue(CAR_INPUT, CAR_BTN, 'a,b');
    testValue(CAR_INPUT, CAR_BTN, 'name1,name2');
  });

  it('Can check character.', () => {
    testValue(CAR_INPUT, CAR_BTN, 'a,ㄱ', ALERT_VALID_LETTER);
    testValue(CAR_INPUT, CAR_BTN, 'a,!', ALERT_VALID_LETTER);
    testValue(CAR_INPUT, CAR_BTN, 'a,🙂', ALERT_VALID_LETTER);
    testValue(CAR_INPUT, CAR_BTN, 'a,汉', ALERT_VALID_LETTER);
    testValue(CAR_INPUT, CAR_BTN, 'a,가힣');
    testValue(CAR_INPUT, CAR_BTN, 'a,az');
    testValue(CAR_INPUT, CAR_BTN, 'a,09');
    testValue(CAR_INPUT, CAR_BTN, 'a,테스트a1');
  });

  it('Can check overlap.', () => {
    testValue(CAR_INPUT, CAR_BTN, 'a,a', ALERT_OVERLAP);
  });
});
