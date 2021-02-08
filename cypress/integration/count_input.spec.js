import {
  testCorrectValue,
  testIncorrectValue,
  setGameData,
} from '../utils/test_value.js';
import {
  CAR_INPUT,
  CAR_BTN,
  COUNT_INPUT,
  COUNT_BTN,
  ALERT_DECIMAL,
  ALERT_VALID_COUNT_RANGE,
} from '../../src/js/constants/index.js';

describe('Car name input test', () => {
  before(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
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
