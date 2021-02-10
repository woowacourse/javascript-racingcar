export const openingSettingContainer = `<div class="d-flex justify-center mt-5"><div id="setting-container">`;

export const titleSection = `<section>
        <h1 class="text-center">🏎️ 자동차 경주 게임</h1>
        <p>
            5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요. <br />
            예시) EAST, WEST, SOUTH, NORTH
        </p>
    </section>`;

export const carNameSection = `<section>
        <div class="d-flex">
            <input type="text" id="name-input" class="w-100 mr-2" placeholder="자동차 이름" />
            <button type="button" id="name-submit-button" class="btn btn-cyan">확인</button>
        </div>
    </section>`;

export const countTemplate = `
        <p>시도할 횟수를 입력해주세요.</p>
        <div class="d-flex">
            <input type="number" id="count-input" class="w-100 mr-2" placeholder="시도 횟수" />
            <button type="button" id="count-submit-button" class="btn btn-cyan">확인</button>
        </div>
    `;

export const closingSettingContainer = `</div></div>`;

export const raceProgressContainer = `<div id="race-progress-container" class="d-flex justify-center mt-5">
        <section class="mt-4">
            <div id="race-progress-screen" class="d-flex">
            </div>
        </section>
    </div>`;
