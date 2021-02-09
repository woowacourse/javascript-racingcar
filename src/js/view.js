class RacingCarView {
  showCount() {
    const $countSection = document.querySelector("#count");
    $countSection.style.display = "block";
    $countSection.innerHTML = `
      <p>시도할 횟수를 입력해주세요.</p>
      <div class="d-flex">
        <input
          type="number"
          id="count-input"
          class="w-100 mr-2"
          placeholder="시도 횟수"
        />
        <button type="button" id="count-btn" class="btn btn-cyan">
          확인
        </button>
      </div>
    `;
  }

  showProcess(cars) {
    const $processSection = document.querySelector("#process");
    $processSection.style.display = "block";

    $processSection.innerHTML = `
    <div class="d-flex">
      ${cars.map(car => {
        return `
        <div>
          <div class="car-player mr-2">${car.name}</div>
          ${`<div class="forward-icon mt-2">⬇️️</div>`.repeat(car.count)}
        </div>
      `;
      })}
    </div>
    `;
  }

  showResult(winners) {
    style.display = "block";
    innerHTML = `<h2>${winners.join(",")}</h2>`;
  }

  hideCount() {}

  hideProcess() {}

  hideResult() {}
}
