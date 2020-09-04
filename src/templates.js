function title(block) {
  return `
      <div class="title">
        <h1>${block.value}</h1>
      </div>
      `;
}

function text(block) {
  return `
        <div class="text">
          <p>${block.value}</p>
        </div>
        `;
}

function textColumns(block) {
  const content = block.value.map(
    (item) => `
          <div>
              <p>${item}</p>
          </div>
          `
  );
  return ` 
          <div class="content">
                  ${content.join("")}
          </div>
          `;
}

export const templates = { text, title, textColumns };
