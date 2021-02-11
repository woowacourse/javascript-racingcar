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
}
