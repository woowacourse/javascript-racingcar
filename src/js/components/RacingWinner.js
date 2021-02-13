export default class RacingWinner {
  constructor(props) {
    this.props = props;
    this.winners = [];

    this.mountDOM();
    this.bindEvents();
  }

  mountDOM() {
    this.$parent = this.props.$parent;

    this.$container = document.createElement('div');
    this.$container.className =
      'd-flex justify-center mt-5 racing-winner-container';

    this.$parent.appendChild(this.$container);
  }

  bindEvents() {
    this.$container.addEventListener(
      'click',
      this.handleClickRestart.bind(this),
    );
  }

  handleClickRestart({ target }) {
    const { resetRacingGame } = this.props;
    if (!target.classList.contains('btn-restart')) {
      return;
    }

    resetRacingGame();
    this.setState({ nextWinners: [] });
  }

  createWinnerHTML() {
    return `
    <section>
      <h2>🏆 최종 우승자: ${this.winners.join(', ')} 🏆</h2>
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
      : '';
  }
}
