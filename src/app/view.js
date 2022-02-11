class RacingCarGameView {
  constructor() {
    this.initDOM();
  }

  initDOM() {
    this.countInputForm = document.querySelector('#count-input-form');
    this.resultField = document.querySelector('#result-field');
    this.gameProgress = document.querySelector('#game-progress');
    this.winners = document.querySelector('#winners');
  }

  renderResults(cars, winners) {
    const progressTemplate = cars
      .map((car) => RacingCarGameView.generateProgressTemplate(car))
      .join('');
    const winnersTemplate = RacingCarGameView.generateWinnersTemplate({
      winners,
    });

    this.gameProgress.innerHTML = progressTemplate;
    this.winners.innerHTML = winnersTemplate;
  }

  renderCountInputForm() {
    this.countInputForm.style.display = 'block';
  }

  static generateProgressTemplate({ name, progress }) {
    return `
    <div class="car-progress">
      <div class="car-name">${name}</div>
      ${'<div class="step">⬇️️</div>'.repeat(progress)}
    </div>
  `;
  }

  static generateWinnersTemplate({ winners }) {
    return `<h2 id="winner-container">🏆최종 승리자:<span id="winner-name">${winners.join(
      ','
    )}</span>🏆</h2>
      <button id="restart-btn">다시 시작하기</button> `;
  }
}
export default RacingCarGameView;

// [...new Array(progress)].map(()=>`<div class="step">⬇️️</div>`).join('')
