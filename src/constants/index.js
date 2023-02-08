const GAME_MESSAGE = Object.freeze({
    askCarName:'경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
    askTryCount:'시도할 회수는 몇회인가요?',
    getResult:(result)=>{`실행 결과`},
    getWinners:(names)=>{`${names}가 최종 우승했습니다.`},
})

module.exports = GAME_MESSAGE;