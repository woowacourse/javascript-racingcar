import Component from '../library/core/Component.js';

export default class GameResult extends Component {
  constructor($target, props) {
    super($target, props);
    this.render();
  }

  initEvent() {}

  render() {
    this.$target.innerHTML = `
      <section>
        <h2>🏆 최종 우승자: EAST, WEST 🏆</h2>
        <div class="d-flex justify-center">
          <button type="button" class="btn btn-cyan">다시 시작하기</button>
        </div>
      </section>
    `;
  }
}
