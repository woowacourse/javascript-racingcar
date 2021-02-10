class View {
	constructor() {
		this.openigDiv = `<div class="d-flex justify-center mt-5"><div>`;

		this.titleSection = `<section>
        <h1 class="text-center">🏎️ 자동차 경주 게임</h1>
        <p>
            5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요. <br />
            예시) EAST, WEST, SOUTH, NORTH
        </p>
    </section>`;

		this.carNameSection = `<section>
        <div class="d-flex">
            <input type="text" class="w-100 mr-2" placeholder="자동차 이름" />
            <button type="button" class="btn btn-cyan">확인</button>
        </div>
    </section>`;

		this.countSection = `<section class="mt-5">
        <p>시도할 횟수를 입력해주세요.</p>
        <div class="d-flex">
            <input type="number" class="w-100 mr-2" placeholder="시도 횟수" />
            <button type="button" class="btn btn-cyan">확인</button>
        </div>
    </section>`;

		this.closingDiv = `</div></div>`;
	}

	initialRender($parentElement) {
		$parentElement.innerHTML =
			this.openigDiv + this.titleSection + this.carNameSection + this.closingDiv;
	}
}

export default new View();
