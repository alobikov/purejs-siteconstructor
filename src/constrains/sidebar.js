import { block } from "../../utils";
import { TextBody, TitleBody } from "./model";

export class Sidebar {
  constructor(selector, addCallback) {
    this.$el = document.querySelector(selector);
    this.updateSite = addCallback;
    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML("afterbegin", this.template);
    this.$el.addEventListener("submit", this.add.bind(this));
  }
  get template() {
    return [block("text"), block("title")].join("");
  }

  add(event) {
    event.preventDefault();
    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;
    const block =
      type === "text"
        ? new TextBody(value, { styles })
        : new TitleBody(value, { styles });
    event.target.value.value = "";
    event.target.styles.value = "";

    this.updateSite(block);
  }
}
