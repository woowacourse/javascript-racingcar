describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = "../../index.html";
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  /* 우승자 확인 */
  it("게임을 완료하고 우승자를 확인할 수 있어야 한다.", () => {
    const carNames = "tt,sally";
    const racingCount = 1;
  
    cy.get("#car-name-input").type(carNames);
    cy.get('#car-name-button').click();

    cy.get('#race-count-input').type(racingCount);
    cy.get('#race-count-button').click();

    cy.get('.result-text').should((result) => {
      const text = result.text();
      expect(text).to.include('최종 우승자')
    });
  });

  /* 차 이름 */
  it("5글자 초과 자동차 이름을 입력한 경우 alert이 호출되어야 한다.", () => {
    const alertStub = cy.stub();
    const invalidInput = "abcdef";
    
    cy.on("window:alert", alertStub);
    
    cy.get("#car-name-input").type(invalidInput);
    
    cy.get("#car-name-button")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
    });
  });

  it("5개 초과하여 자동차를 입력한 경우 alert이 호출되어야 한다.", () => {
    const alertStub = cy.stub();
    const invalidInput = "a,  b, c,d,e,f";
    
    cy.on("window:alert", alertStub);

    cy.get("#car-name-input").type(invalidInput);

    cy.get("#car-name-button")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
    });
  });

  /* 시도 횟수 */
  it("1이상 20이하의 자연수가 아닌 경우 alert이 호출되어야 한다.", () => {
    const alertStub = cy.stub();
    const invalidInput = "-2";
    
    cy.get("#car-name-input").type('1,2,3,4,5');
    cy.get('#car-name-button').click();

    cy.on("window:alert", alertStub);

    cy.get("#race-count-input").type(invalidInput);

    cy.get("#race-count-button")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
    });
  });

  it("숫자가 아닌 경우 alert이 호출되어야 한다.", () => {
    const alertStub = cy.stub();
    const invalidInput = "aae";
   
    cy.get("#car-name-input").type('1,2,3,4,5');
    cy.get('#car-name-button').click();

    cy.on("window:alert", alertStub);

    cy.get("#race-count-input").type(invalidInput);

    cy.get("#race-count-button")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
    });
  });

  /* 다시 시작 */
  it("다시 시작하기 버튼을 눌렀을 때에 race-count-input-container 요소가 display none이어야 한다", () => {
    const carNames = "tt,sally";
    const racingCount = 1;
  
    cy.get("#car-name-input").type(carNames);
    cy.get('#car-name-button').click();

    cy.get('#race-count-input').type(racingCount);
    cy.get('#race-count-button').click();

    cy.get('.restart-button').click();

    cy.get('.race-count-input-container').should('not.have.css', 'display', 'flex');
  });
});
