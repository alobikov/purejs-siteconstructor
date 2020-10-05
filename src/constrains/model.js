import { row, col, css } from "../../utils";

class Body {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHtml() {
    throw new Error("toHtml method must be implemented");
  }
}

export class TitleBody extends Body {
  constructor(value, options) {
    super(value, options);
  }
  toHtml() {
    const { styles, tag = "h1" } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}
export class TextBody extends Body {
  constructor(value, options) {
    super(value, options);
  }
  toHtml() {
    const { styles, tag = "h1" } = this.options;
    return row(col(`<p>${this.value}</p>`), css(styles));
  }
}
export class TextColumnsBody extends Body {
  constructor(value, options) {
    super(value, options);
  }
  toHtml() {
    const { styles, tag = "h1" } = this.options;
    const content = this.value.map(col).join("");
    return row(content, css(styles));
  }
}
export class ImageBody extends Body {
  constructor(value, options) {
    super(value, options);
  }
  toHtml() {
    const { styles, imageStyles: is, alt = "" } = this.options;
    return row(
      `
      <img src=${this.value} alt="${alt}" style="${css(is)}">`,
      css(styles)
    );
  }
}
