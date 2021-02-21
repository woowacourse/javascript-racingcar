export const TEMPLATES = {
	SETTING_CONTAINER: `
        <div class="d-flex justify-center mt-5">
            <div id="setting-container">
                <section>
                    <h1 class="text-center">🏎️ 자동차 경주 게임</h1>
                    <p>
                        5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요. <br />
                        예시) EAST, WEST, SOUTH, NORTH
                    </p>
                </section>
                <section>
                    <div class="d-flex">
                        <input type="text" id="name-input" class="w-100 mr-2" placeholder="자동차 이름" />
                        <button type="button" id="name-submit-button" class="btn btn-cyan">확인</button>
                    </div>
                </section>
            </div>
        </div>`,
	COUNT_SECTION: `
        <section calss="mt-5">
            <p>시도할 횟수를 입력해주세요.</p>
            <div class="d-flex">
                <input type="number" id="count-input" class="w-100 mr-2" placeholder="시도 횟수" />
                <button type="button" id="count-submit-button" class="btn btn-cyan">확인</button>
            </div>
        </section>`,
	PROGRESS_CONTAINER: `
        <div id="race-progress-container" class="d-flex justify-center mt-5">
            <section class="mt-4">
                <div id="race-progress-screen" class="d-flex">
                </div>
            </section>
        </div>`,
	RESULT_CONTAINER: `
        <div id="result-container" class="d-flex justify-center mt-5">
            <section>
                <h2 id="winner-text"></h2>
                <div class="d-flex justify-center">
                    <button id="reset-button" type="button" class="btn btn-cyan">다시 시작하기</button>
                </div>
            </section>
        </div>`,
}

export const IDS = {
	APP: "app",
	RACE_PROGRESS_SCREEN: "race-progress-screen",
	WINNER_TEXT: "winner-text",
	NAME_INPUT: "name-input",
	COUNT_INPUT: "count-input",
	SETTING_CONTAINER: "setting-container",
	COUNT_SUBMIT_BUTTON: "count-submit-button",
	NAME_SUBMIT_BUTTON: "name-submit-button",
	RESET_BUTTON: "reset-button",
}

export const GAME_SETTINGS = {
	RANDOM_NUMBER: {
		MIN: 0,
		MAX: 9,
		MIN_MOVABLE: 4,
	},
	MAX_TOTAL_NUMBER_OF_NAMES: 9,
	MAX_NAME_LENGTH: 5,
	MAX_COUNT: 20000,
}

export const MESSAGES = {
	NAME_ALREADY_REGISTERED: "이미 이름이 등록되었습니다.",
	EMPTY_NAME: "빈 문자인 이름은 등록할 수 없습니다.",
	TOO_MANY_NAMES: `가로 스크롤 생성을 방지하기 위해 이름 등록은 ${GAME_SETTINGS.MAX_TOTAL_NUMBER_OF_NAMES}개 이하로 제한하고 있습니다.`,
	TOO_LONG_NAME: `${GAME_SETTINGS.MAX_NAME_LENGTH}자를 넘는 이름은 등록할 수 없습니다.`,
	OVERWRITTEN: "중복된 이름은 등록할 수 없습니다.",
	COUNT_ALREADY_REGISTERED: "이미 횟수를 설정하였습니다.",
	NAN: "유효한 숫자가 아닙니다.",
	NOT_NATURAL_NUMBER: "자연수만 설정할 수 있습니다.",
	TOO_BIG_COUNT: `원활한 게임을 위해 횟수는 ${GAME_SETTINGS.MAX_COUNT} 이하로 제한하고 있습니다.`,
}
