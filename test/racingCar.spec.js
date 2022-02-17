describe('구현 결과가 요구사항과 일치해야 한다.', () => {
    const baseURL = 'index.html';
    const SELECTOR = {
        CAR_NAME_INPUT: '#car-name-input',
        TRY_COUNT_INPUT: '#try-count-input',
        CAR_NAME_SUBMIT_BUTTON: '#car-name-submit-button',
        TRY_COUNT_SUBMIT_BUTTON: '#try-count-submit-button',
        CAR_TRACK: '.car-track',
        CAR_STEP_CONTAINER: '.car-steps',
        WINNERS: '#winners',
        RESTART_BUTTON: '#restart-button',
    };

    const giveAlertStub = () => {
        const alertStub = cy.stub();

        cy.on('window:alert', alertStub);

        return alertStub;
    };

    const thenExpectCalledAlert = (buttonSelector, alertStub) => {
        cy.get(buttonSelector)
            .click()
            .then(() => {
                expect(alertStub).to.be.called;
            });
    };

    const submitCarName = (carName) => {
        cy.get(SELECTOR.CAR_NAME_INPUT).type(carName);
        cy.get(SELECTOR.CAR_NAME_SUBMIT_BUTTON).click();
    };

    beforeEach(() => {
        cy.visit(baseURL);
    });

    context('자동차 이름 입력', () => {
        it('공백을 입력한 경우, 에러 메시지를 확인할 수 있어야 한다.', () => {
            const alertStub = giveAlertStub();
            const carName = '아 놀드';

            cy.get(SELECTOR.CAR_NAME_INPUT).type(carName);

            thenExpectCalledAlert(SELECTOR.CAR_NAME_SUBMIT_BUTTON, alertStub);
        });

        it('5자가 넘는 경우 에러 메시지를 확인할 수 있어야 한다.', () => {
            const alertStub = giveAlertStub();
            const carName = '아놀드소피아';

            cy.get(SELECTOR.CAR_NAME_INPUT).type(carName);

            thenExpectCalledAlert(SELECTOR.CAR_NAME_SUBMIT_BUTTON, alertStub);
        });

        it('1자보다 작은 경우 에러 메시지를 확인할 수 있어야 한다.', () => {
            const alertStub = giveAlertStub();

            thenExpectCalledAlert(SELECTOR.CAR_NAME_SUBMIT_BUTTON, alertStub);
        });

        it('1자일 때 전진 시도 인풋이 노출되어야 한다.', () => {
            const carName = '차';

            submitCarName(carName);

            cy.get(SELECTOR.TRY_COUNT_INPUT).should('be.visible');
        });

        it('5자일 때 전진 시도 인풋이 노출되어야 한다.', () => {
            const carName = '붕붕자동차';

            submitCarName(carName);

            cy.get(SELECTOR.TRY_COUNT_INPUT).should('be.visible');
        });
    });

    const CAR_NAMES = ['우아한', '테크', '코스'];
    const TRY_COUNT = 10;

    const submitCarNameCorrectly = () => {
        submitCarName(CAR_NAMES.join(','));
    };

    const playGameCorrectly = () => {
        submitCarNameCorrectly();
        cy.get(SELECTOR.TRY_COUNT_INPUT).type(TRY_COUNT);
        cy.get(SELECTOR.TRY_COUNT_SUBMIT_BUTTON).click();
    };

    context('전진 시도 횟수 입력', () => {
        it('소숫점 자리를 가진 경우, 에러 메세지를 확인할 수 있어야 한다.', () => {
            const alertStub = giveAlertStub();
            const tryCount = 12.345;

            submitCarNameCorrectly();
            cy.get(SELECTOR.TRY_COUNT_INPUT).type(tryCount);

            thenExpectCalledAlert(SELECTOR.TRY_COUNT_SUBMIT_BUTTON, alertStub);
        });

        it('음수인 경우, 에러 메세지를 확인할 수 있어야 한다.', () => {
            const alertStub = giveAlertStub();
            const tryCount = -1;

            submitCarNameCorrectly();
            cy.get(SELECTOR.TRY_COUNT_INPUT).type(tryCount);

            thenExpectCalledAlert(SELECTOR.TRY_COUNT_SUBMIT_BUTTON, alertStub);
        });

        it('공백인 경우, 에러 메세지를 확인할 수 있어야 한다.', () => {
            const alertStub = giveAlertStub();

            submitCarNameCorrectly();

            thenExpectCalledAlert(SELECTOR.TRY_COUNT_SUBMIT_BUTTON, alertStub);
        });

        it('사용자 입력이 모두 끝나면, 각 자동차의 이름과 위치가 출력되어야 한다.', () => {
            playGameCorrectly();

            cy.get(SELECTOR.CAR_TRACK)
                .should('have.length', CAR_NAMES.length)
                .each((track, index) => {
                    cy.wrap(track).within(() => {
                        cy.contains(CAR_NAMES[index]).should('exist');
                        cy.get(SELECTOR.CAR_STEP_CONTAINER).should('exist');
                    });
                });
        });

        it('게임이 끝나면, 우승자가 출력되어야 한다.', () => {
            const cars = [];

            playGameCorrectly();

            cy.get(SELECTOR.CAR_TRACK)
                .each((track, index) => {
                    cy.wrap(track).within(() => {
                        cy.get(SELECTOR.CAR_STEP_CONTAINER)
                            .children()
                            .its('length')
                            .then((step) => {
                                cars.push({ name: CAR_NAMES[index], step });
                            });
                    });
                })
                .then(() => {
                    const maxStep = Math.max(...cars.map((car) => car.step));
                    const winners = cars
                        .filter((car) => car.step === maxStep)
                        .map((car) => car.name)
                        .join(',');

                    cy.get(SELECTOR.WINNERS).should('have.text', winners);
                });
        });
    });

    it('다시 시도하기 버튼을 클릭하면, 게임이 초기화되어야 한다.', () => {
        playGameCorrectly();

        cy.get(SELECTOR.CAR_NAME_INPUT).should('have.value', CAR_NAMES.join(','));
        cy.get(SELECTOR.TRY_COUNT_INPUT).should('have.value', TRY_COUNT);
        cy.get(SELECTOR.RESTART_BUTTON).click();

        cy.get(SELECTOR.CAR_NAME_INPUT).should('have.value', '');
        cy.get(SELECTOR.TRY_COUNT_INPUT).should('have.value', '');
    });
});
