// 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
// 자동차에 이름을 부여할 수 있다.x
// 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
// 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다. x
// 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
// 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
// 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
// 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
// 사용자가 잘못된 입력 값을 작성한 경우 alert을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.
import { Car } from '../../src/models/Car';
import { state } from '../../src/models/state.js';

describe('test', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  it('사용자가 이름을 횟수를 등록하고 승자를 확인할 수 있다.', () => {
    //given
    const names = 'a, b, c';
    //when
    cy.get('#car-name-input').type(names);
    cy.get('#car-name-input-button').click();
    cy.get('#racing-number-input').type(3);
    cy.get('#racing-number-input-button').click();

    //then
    cy.get('#racing-winner').should('not.have.text', '');
  });

  it('사용자가 잘못된 이름을 등록한경우 alert 호출한다.', () => {
    //given
    const invalidNames = 'abcdefgh';
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    //when
    cy.get('#car-name-input').type(invalidNames);

    //then
    cy.get('#car-name-input-button')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });
});
