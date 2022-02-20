import racingCars from '../src/racingCars.js';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../src/constant.js';

describe('구현 결과가 요구사항과 일치해야 한다.', () => {
    const baseURL = 'index.html';
    const SELECTOR = {
        CAR_NAME_INPUT: '#car-name-input',
        TRY_COUNT_INPUT: '#try-count-input',
        CAR_NAME_SUBMIT_FORM: '#input-form-name',
        TRY_COUNT_SUBMIT_FORM: '#input-form-try',
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

    const thenExpectCalledAlert = (formSelector, alertStub, message) => {
        cy.get(formSelector)
            .submit()
            .then(() => {
                expect(alertStub).to.be.calledWith(message);
            });
    };

    const submitCarName = (carName) => {
        cy.get(SELECTOR.CAR_NAME_INPUT).type(carName);
        cy.get(SELECTOR.CAR_NAME_SUBMIT_FORM).submit();
    };

    beforeEach(() => {
        cy.visit(baseURL);
    });

    context('자동차 이름 입력', () => {
        it('공백을 입력한 경우, 에러 메시지를 확인할 수 있어야 한다.', () => {
            const alertStub = giveAlertStub();
            const carName = '아 놀드';

            cy.get(SELECTOR.CAR_NAME_INPUT).type(carName);

            thenExpectCalledAlert(
                SELECTOR.CAR_NAME_SUBMIT_FORM,
                alertStub,
                ERROR_MESSAGE.BLANK_CAR_NAME,
            );
        });

        it('5자가 넘는 경우 에러 메시지를 확인할 수 있어야 한다.', () => {
            const alertStub = giveAlertStub();
            const carName = '아놀드소피아';

            cy.get(SELECTOR.CAR_NAME_INPUT).type(carName);

            thenExpectCalledAlert(
                SELECTOR.CAR_NAME_SUBMIT_FORM,
                alertStub,
                ERROR_MESSAGE.EXCEED_CAR_NAME,
            );
        });

        it('1자보다 작은 경우 에러 메시지를 확인할 수 있어야 한다.', () => {
            const alertStub = giveAlertStub();

            thenExpectCalledAlert(
                SELECTOR.CAR_NAME_SUBMIT_FORM,
                alertStub,
                ERROR_MESSAGE.EMPTY_CAR_NAME,
            );
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
    const TRY_COUNT = 5;
    const DELAY_PER_RACE = 1000;
    const DELAY_AFTER_END = 2000;
    const TOTAL_DELAY = DELAY_PER_RACE * TRY_COUNT + DELAY_AFTER_END;

    const submitCarNameCorrectly = () => {
        submitCarName(CAR_NAMES.join(','));
    };

    const playGameCorrectly = () => {
        submitCarNameCorrectly();
        cy.get(SELECTOR.TRY_COUNT_INPUT).type(TRY_COUNT);
        cy.get(SELECTOR.TRY_COUNT_SUBMIT_FORM).submit();
    };

    context('전진 시도 횟수 입력', () => {
        it('문자를 입력한 경우, 에러 메세지를 확인할 수 있어야 한다.', () => {
            const alertStub = giveAlertStub();
            const tryCount = 'ㄹ';

            submitCarNameCorrectly();
            cy.get(SELECTOR.TRY_COUNT_INPUT).type(tryCount);

            thenExpectCalledAlert(
                SELECTOR.TRY_COUNT_SUBMIT_FORM,
                alertStub,
                ERROR_MESSAGE.NEGATIVE_TRY_COUNT,
            );
        });

        it('음수인 경우, 에러 메세지를 확인할 수 있어야 한다.', () => {
            const alertStub = giveAlertStub();
            const tryCount = -1;

            submitCarNameCorrectly();
            cy.get(SELECTOR.TRY_COUNT_INPUT).type(tryCount);

            thenExpectCalledAlert(
                SELECTOR.TRY_COUNT_SUBMIT_FORM,
                alertStub,
                ERROR_MESSAGE.NEGATIVE_TRY_COUNT,
            );
        });

        it('공백인 경우, 에러 메세지를 확인할 수 있어야 한다.', () => {
            const alertStub = giveAlertStub();

            submitCarNameCorrectly();

            thenExpectCalledAlert(
                SELECTOR.TRY_COUNT_SUBMIT_FORM,
                alertStub,
                ERROR_MESSAGE.NEGATIVE_TRY_COUNT,
            );
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
            playGameCorrectly();

            cy.clock();
            cy.wait(TOTAL_DELAY).then(() => {
                cy.get(SELECTOR.WINNERS).should('have.text', racingCars.getWinners().join(','));
            });
        });

        it('게임이 끝난 후, 2초 뒤에 축하 메세지 확인할 수 있어야 한다.', () => {
            const alertStub = giveAlertStub();

            playGameCorrectly();

            cy.clock();
            cy.wait(TOTAL_DELAY * 2).then(() => {
                expect(alertStub).to.be.calledWith(SUCCESS_MESSAGE);
            });
        });
    });

    it('다시 시도하기 버튼을 클릭하면, 게임이 초기화되어야 한다.', () => {
        playGameCorrectly();

        cy.get(SELECTOR.RESTART_BUTTON).click();

        cy.get(SELECTOR.CAR_NAME_INPUT).should('have.value', '');
        cy.get(SELECTOR.TRY_COUNT_INPUT).should('have.value', '');
    });
});
