describe('구현 결과가 요구사항과 일치해야 한다.', () => {
    beforeEach(() => {
        cy.visit('index.html');
    });

    const formAlertTest = (selector, value) => () => {
        const alertStub = cy.stub();
        cy.on('window:alert', alertStub);

        cy.get(`#${selector}-input`).type(value);
        cy.get(`#${selector}-submit-button`)
            .click()
            .then(() => {
                expect(alertStub).to.be.called;
            });
    };

    it(
        '자동차 이름에 공백이 포함된 경우, alert가 호출되어야 한다.',
        formAlertTest('car-name', 'ab cd'),
    );

    it(
        '자동차 이름이 5자가 넘는 경우, alert가 호출되어야 한다.',
        formAlertTest('car-name', 'abcdfesf'),
    );

    it(
        '전진 시도 횟수 입력이 소숫점 자리를 가진 경우, alert가 호출되어야 한다.',
        formAlertTest('try-count', 123.456),
    );
});
