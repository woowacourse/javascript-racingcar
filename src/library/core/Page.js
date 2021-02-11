import Component from "./Component.js";

export default class Page extends Component {
  constructor($target, props) {
    super($target, props);
  }

  render() {
    this.mountTemplate();
    this.mountChildComponents();
  }

  mountTemplate() { }
  mountChildComponents() { }
}