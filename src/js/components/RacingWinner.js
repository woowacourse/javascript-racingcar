export default class RacingWinner {
  constructor({ $parent, resetRacingGame }) {
    this.$parent = $parent;
    this.winners = [];
    this.resetRacingGame = resetRacingGame;

    this.init();
    this.bindEvents();
  }

  init() {
    const $container = document.createElement("div");
    const containerClassList = [
      "d-flex",
      "justify-center",
      "mt-5",
      "racing-winner-container",
    ];
    containerClassList.forEach((className) =>
      $container.classList.add(className),
    );

    this.$container = $container;
    this.$parent.appendChild(this.$container);
  }

  bindEvents() {
    this.$container.addEventListener(
      "click",
      this.handleClickRestart.bind(this),
    );
  }

  handleClickRestart({ target }) {
    if (!target.classList.contains("btn-restart")) {
      return;
    }

    this.resetRacingGame();
    this.setState({ nextWinners: [] });
  }

  createWinnerHTML() {
    return `
    <section>
      <h2>🏆 최종 우승자: ${this.winners.join(", ")} 🏆</h2>
      <div class="d-flex justify-center">
        <button type="button" data-test="restart-button" class="btn btn-cyan btn-restart">다시 시작하기</button>
      </div>
    </section>`;
  }

  setState({ nextWinners }) {
    this.winners = nextWinners;

    this.render();
  }

  render() {
    this.$container.innerHTML = this.winners.length
      ? this.createWinnerHTML()
      : "";
  }
}
