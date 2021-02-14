class Templates {
	constructor() {
		this.openingSettingContainerTemplate = `<div class="d-flex justify-center mt-5"><div id="setting-container">`;

		this.titleSectionTemplate = `<section>
                <h1 class="text-center">🏎️ 자동차 경주 게임</h1>
                <p>
                    5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요. <br />
                    예시) EAST, WEST, SOUTH, NORTH
                </p>
            </section>`;

		this.carNameSectionTemplate = `<section>
                <div class="d-flex">
                    <input type="text" id="name-input" class="w-100 mr-2" placeholder="자동차 이름" />
                    <button type="button" id="name-submit-button" class="btn btn-cyan">확인</button>
                </div>
            </section>`;

		this.countSectionTemplate = `
                <section calss="mt-5">
                    <p>시도할 횟수를 입력해주세요.</p>
                    <div class="d-flex">
                        <input type="number" id="count-input" class="w-100 mr-2" placeholder="시도 횟수" />
                        <button type="button" id="count-submit-button" class="btn btn-cyan">확인</button>
                    </div>
                </section>
            `;

		this.closingSettingContainerTemplate = `</div></div>`;

		this.resultContainerTemplate = `<div id="result-container" class="d-flex justify-center mt-5">
            <section>
                <h2></h2>
                <div class="d-flex justify-center">
                    <button id="reset-button" type="button" class="btn btn-cyan">다시 시작하기</button>
                </div>
            </section>
        </div>`;

		this.arrowTemplate = `<div class="forward-icon mt-2">⬇️</div>`;
	}
}

export default new Templates();
