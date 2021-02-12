import Component from "./Component.js";

export default class Page extends Component {

  constructor($target, props) {
    super($target, props);
  }

  render() {
    this._mountTemplate();
    this._mountChildComponents();
  }

  _mountTemplate() { }
  _mountChildComponents() { }
}
