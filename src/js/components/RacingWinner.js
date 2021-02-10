export default class RacingWinner {
  constructor({ $parent }) {
    this.$parent = $parent;
    this.winners = [];

    this.init();
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
