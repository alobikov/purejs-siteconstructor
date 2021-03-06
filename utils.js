export function row(content, styles = "") {
  return `<div style="${styles}" class='row'>${content}</div>`;
}

export function col(content) {
  return `<div class='col-sm'>${content}</div>`;
}

export function css(styles = {}) {
  if (typeof styles === "string") return styles;
  const toString = (key) => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toString).join(";");
}

export function block(type) {
  return `
    <form name="${type}">
    <h5>${type}</h5>
    <div class="form-group">
    <input class="form-control form-control-sm" name="value" placeholder="value">
    </div>
    <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
    </div>
    <button type="submit" class="btn btn-primary btn-sm">Add</button>
    </form>
    <ht />
    `;
}

export function sizedBox(height) {
  return `
  <div style="height: ${height}px"></div>
  `;
}

export function imageBlock() {
  return `
    <form name="image block">
      <h5>image block</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="image link" value="https://image.freepik.com/free-vector/construction-site_23-2147513565.jpg">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
        <button type="submit" class="btn btn-primary btn-sm">Add</button>
    </form>
    <ht />
    `;
}
