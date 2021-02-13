import { ERROR_MESSAGE } from "../utils/constant.js";

export default class Component {
  $target;
  props;

  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    if (!this.props) {
      this.props = {};
    }
    if (!this.#verifyAllPropsExist()) {
      alert(ERROR_MESSAGE.NOT_EXIST_PROPS);
      return;
    }
    this.initEvent();
  }

  initEvent() { }

  render() { }

  #verifyAllPropsExist() {
    const values = Object.values(this.props);
    if (!values.every(value => value !== null)) {
      return false;
    }
    return true;
  }
}
