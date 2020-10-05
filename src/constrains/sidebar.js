import { block, sizedBox, imageBlock } from "../../utils";
import { TextBody, TitleBody, ImageBody } from "./model";

export class Sidebar {
  constructor(selector, addCallback) {
    this.$el = document.querySelector(selector);
    this.updateSite = addCallback;
    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML("afterbegin", this.template);
    this.$el.insertAdjacentHTML("afterbegin", `<h2>ToolBox</h2>`);
    this.$el.addEventListener("submit", this.add.bind(this));
  }
  get template() {
    return [
      sizedBox(20),
      block("text block"),
      sizedBox(40),
      block("title block"),
      sizedBox(40),
      imageBlock(),
    ].join("");
  }

  add(event) {
    event.preventDefault();
    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;
    const block = this.reducer(type, value, styles);
    event.target.value.value = "";
    event.target.styles.value = "";

    this.updateSite(block);
  }

  reducer(type, value, styles) {
    switch (type) {
      case "text block":
        return new TextBody(value, { styles });
      case "title block":
        return new TitleBody(value, { styles });
      case "image block":
        return new ImageBody(value, { styles });
      default:
        return new TextBody("Bad block type", {});
    }
  }
}
