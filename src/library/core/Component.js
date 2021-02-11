import { ERROR_MESSAGE } from "../utils/constant.js";

export default class Component {
  $target;
  props;

  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.initEvent();
  }

  initEvent() { }

  render() { }

  _verifyPropsExist(string) {
    if (!this.props[string]) {
      throw new Error(ERROR_MESSAGE.NOT_EXIST_PROPS);
    }
  }
}
