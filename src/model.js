import imgCoffee from "./assets/glass-coffee-wooden-board.jpg";
import {
  TitleBody,
  TextBody,
  TextColumnsBody,
  ImageBody,
} from "./constrains/model";

export const model = [
  new TitleBody("Site constructor powered by pure JavaScript", {
    styles: { color: "blue", "text-align": "center", padding: "1.5rem" },
    tag: "h2",
  }),
  new TextBody("Models built as classes", {
    styles: {
      background: "linear-gradient(to bottom, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
  new TextColumnsBody(["Text holder 1", "Text holder 2", "Text holder 3"], {
    styles: {
      background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
      padding: "2rem",
      color: "#fff",
      "font-weight": "bold",
    },
  }),
  new ImageBody(imgCoffee, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    alt: "Cup of coffee",
    // styles: "display: block;  margin-left: auto; margin-right: auto",
  }),
];
