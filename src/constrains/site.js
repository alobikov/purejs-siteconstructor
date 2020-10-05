export class Site {
  constructor(selector) {
    this.$el = document.querySelector("#site");
  }
  render(models) {
    this.$el.innerHTML = "";
    models.forEach((model) => {
      this.$el.insertAdjacentHTML("beforeend", model.toHtml());
    });
  }
}
