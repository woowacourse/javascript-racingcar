import { testValue, setGameData } from '../utils/test_value.js';
import {
  CAR_INPUT,
  CAR_BTN,
  COUNT_INPUT,
  COUNT_BTN,
  ALERT_DECIMAL,
  ALERT_VALID_COUNT_RANGE,
  COUNT_CONTAINER,
} from '../../src/js/constants/index.js';

describe('Count input test', () => {
  before(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
    setGameData(CAR_INPUT, CAR_BTN, 'a,b');
  });

  it('Can render count input.', () => {
    cy.get(COUNT_CONTAINER).children().should('exist');
  });

  it('Can check less than zero.', () => {
    testValue(COUNT_INPUT, COUNT_BTN, 0, ALERT_VALID_COUNT_RANGE);
    testValue(COUNT_INPUT, COUNT_BTN, -5, ALERT_VALID_COUNT_RANGE);
  });

  it('Can check decimal.', () => {
    testValue(COUNT_INPUT, COUNT_BTN, 1.5, ALERT_DECIMAL);
  });

  it('Can check correct number', () => {
    testValue(COUNT_INPUT, COUNT_BTN, 5);
  });
});
