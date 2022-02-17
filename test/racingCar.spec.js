describe('구현 결과가 요구사항과 일치해야 한다.', () => {
    beforeEach(() => {
        cy.visit('index.html');
    });

    const typeAndSubmit = (selector, value) => {
        value && cy.get(`#${selector}-input`).type(value);

        return cy.get(`#${selector}-submit-button`).click();
    };

    const formAlertTest = (selector, value) => {
        const alertStub = cy.stub();
        cy.on('window:alert', alertStub);

        typeAndSubmit(selector, value).then(() => {
            expect(alertStub).to.be.called;
        });
    };

    const carNameFormTest = (value) => () => {
        formAlertTest('car-name', value);
    };

    const tryCountFormTest = (value) => () => {
        typeAndSubmit('car-name', 'a,b,c');
        formAlertTest('try-count', value);
    };

    it('자동차 이름에 공백이 포함된 경우, alert가 호출되어야 한다.', carNameFormTest('ab cd'));

    it('자동차 이름이 5자가 넘는 경우, alert가 호출되어야 한다.', carNameFormTest('abcdfesf'));

    it('자동차 이름에 공백인 경우, alert가 호출되어야 한다.', carNameFormTest(''));

    it(
        '전진 시도 횟수 입력이 소숫점 자리를 가진 경우, alert가 호출되어야 한다.',
        tryCountFormTest(123.456),
    );

    it('전진 시도 횟수 입력이 음수인 경우, alert가 호출되어야 한다.', tryCountFormTest(-12));

    it('전진 시도 횟수 입력이 빈칸인 경우, alert가 호출되어야 한다.', tryCountFormTest(''));
});
