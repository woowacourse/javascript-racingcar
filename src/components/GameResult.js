import Component from '../library/core/Component.js';

export default class GameResult extends Component {
  constructor($target, props) {
    super($target, props);
  }

  initEvent() {
    this.$target.addEventListener('click', ({ target }) => {
      if (target.id === 'retry') {
        this.props.reset();
      }
    });
  }

  render() {
    this.$target.innerHTML = `
      <section>
        <h2>
          🏆 최종 우승자:
          <span id="winners">${this.props.winners.join(', ')}</span>🏆
        </h2>
        <div class="d-flex justify-center">
          <button type="button" id="retry" class="btn btn-cyan">다시 시작하기</button>
        </div>
      </section>
    `;
  }
}
