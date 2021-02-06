import alertConstants from '../../src/js/constants/alertConstants.js';

context('carRacing', () => {
  beforeEach(() => {
    // cy.visit('http://127.0.0.1:5501/javascript-racingcar');
    cy.visit('http://127.0.0.1:5500');
  });

  it('자동차 이름과 시도 횟수를 입력했을 때, 자동차 이름이 출력되는지 확인한다.', () => {
    const carNamesInputText = 'EAST, WEST, SOUTH, NORTH';
    const carNames = carNamesInputText.split(',').map((name) => name.trim());
    const racingCount = 5;

    cy.get('#car-names-input').type(carNamesInputText);
    cy.get('#car-names-submit').click();
    cy.get('#racing-count-input').type(racingCount);
    cy.get('#racing-count-submit').click();

    for (let i = 0; i < carNames.length; i++) {
      cy.get('.car-player').contains(carNames[i]).should('have.text', carNames[i]);
    }
  });

  // 수정 필요 - alert 체크가 정상적으로 동작하지 않음
  it('자동차 이름이 비어있는 경우 경고창을 띄운다.', () => {
    cy.get('#car-names-submit').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains(alertConstants.INVALID_CAR_NAME);
    });
  });

  // 수정 필요 - alert 체크가 정상적으로 동작하지 않음
  it('5자 이상의 자동차 이름을 입력받으면 경고창을 띄운다.', () => {
    cy.get('#car-names-input').type('car1, car2, car3456');
    cy.get('#car-names-submit').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains(alertConstants.INVALID_CAR_NAME);
    });
  });
});
