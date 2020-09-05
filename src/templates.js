function title(block) {
  const styles = block.options.styles || "";
  console.log(styles);
  return `
      <div class="title" style="${styles}">
        <h1>${block.value}</h1>
      </div>
      `;
}

function text(block) {
  const styles = block.options.styles || "";
  console.log(styles);
  return `
        <div class="text" style="${styles}">
          <p>${block.value}</p>
        </div>
        `;
}

function textColumns(block) {
  const styles = block.options.styles || "";
  const content = block.value.map(
    (item) => `
          <div>
              <p>${item}</p>
          </div>
          `
  );
  return ` 
          <div class="content" style="${styles}">
                  ${content.join("")}
          </div>
          `;
}

function image(block) {
  const styles = block.options.styles || "";
  return `
    <img src=${block.value} alt="image of coffee cup" style="${styles}">
    `;
}

export const templates = { text, title, textColumns, image };
