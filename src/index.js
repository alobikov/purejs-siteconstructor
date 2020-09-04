import { model } from "./model";
import "./styles/main.css";
import { templates } from "./templates";

function build(models) {
  let html;
  const site = document.querySelector("#site");
  models.forEach((item) => {
    console.log(item);
    const generatorFunction = templates[item.type];
    console.log(generatorFunction);
    html = generatorFunction(item);
    if (generatorFunction) {
      site.insertAdjacentHTML("beforeend", html);
    }
  });
}

build(model);
