import imgConstructing from "./assets/website-construction.jpg";
import {
  TitleBody,
  TextBody,
  TextColumnsBody,
  ImageBody,
} from "./constrains/model";

export const model = [
  new TitleBody("Site Constructor Powered by Pure JavaScript", {
    styles: {
      color: "#a3520a",
      "text-align": "center",
      padding: "1.5rem",
      "font-weight": "bold",
    },
    tag: "h1",
  }),
  new ImageBody(imgConstructing, {
    styles: {
      "padding-bottom": "2rem",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "800px",
      height: "auto",
    },
    alt: "Cup of coffee",
    // styles: "display: block;  margin-left: auto; margin-right: auto",
  }),

  new TextColumnsBody(["Features", "Learned"], {
    //? destructuring with default value, destructuring with rename
    styles: {
      background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
      padding: "2rem",
      color: "#fff",
      "font-weight": "bold",
    },
  }),
  new TextBody("Models built as classes", {
    styles: {
      background: "linear-gradient(to bottom, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
  new TextBody("No external libraries used!", {
    styles: {
      background: "linear-gradient(to bottom, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
];
