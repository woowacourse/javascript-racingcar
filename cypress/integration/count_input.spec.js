import {
  testCorrectValue,
  testIncorrectValue,
  setGameData,
} from '../utils/test_value.js';
import {
  ALERT_DECIMAL,
  ALERT_VALID_COUNT_RANGE,
} from '../../src/js/constants/index.js';

describe('Count input test', () => {
  const CAR_INPUT = '.car-name-input';
  const CAR_BTN = '.car-name-btn';
  const COUNT_INPUT = '.count-input';
  const COUNT_BTN = '.count-btn';

  before(() => {
    cy.visit('/');
    setGameData(CAR_INPUT, CAR_BTN, 'a,b');
  });

  it('Can check less than zero.', () => {
    testIncorrectValue(COUNT_INPUT, COUNT_BTN, 0, ALERT_VALID_COUNT_RANGE);
    testIncorrectValue(COUNT_INPUT, COUNT_BTN, -5, ALERT_VALID_COUNT_RANGE);
  });

  it('Can check decimal.', () => {
    testIncorrectValue(COUNT_INPUT, COUNT_BTN, 1.5, ALERT_DECIMAL);
  });

  it('Can check correct number', () => {
    testCorrectValue(COUNT_INPUT, COUNT_BTN, 5);
  });
});
