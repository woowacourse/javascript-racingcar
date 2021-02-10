class Template {
  countSectionTemplate() {
    return `
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

  processSectionTemplate(cars) {
    return `
    <div class="d-flex">
    ${cars
      .map(car => {
        return `
        <div class="process-car">
          <div class="car-player mr-2">${car.name}</div>
          ${`<div class="forward-icon mt-2">⬇️️</div>`.repeat(car.forward)}
        </div>
      `;
      })
      .join("")}
    </div>
    `;
  }

  resultSectionTemplate(winners) {
    return `
      <h2 id="result-winner">🏆 최종 우승자: ${winners.join(", ")} 🏆</h2>
      <div class="d-flex justify-center">
        <button type="button" id="reset-btn" class="btn btn-cyan">다시 시작하기</button>
      </div>
    `;
  }
}

export const {
  countSectionTemplate,
  processSectionTemplate,
  resultSectionTemplate,
} = new Template();
