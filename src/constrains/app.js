import { Site } from "./site";
import { Sidebar } from "./sidebar";

export default class App {
  constructor(model) {
    this.model = model;
  }
  init() {
    const site = new Site("#site");
    site.render(this.model);

    const updateCallback = (newBlock) => {
      console.log(newBlock);
      this.model.push(newBlock);
      site.render(this.model);
    };

    new Sidebar("#panel", updateCallback);
  }
}
