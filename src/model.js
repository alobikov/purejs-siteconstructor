import imgCoffee from "./assets/glass-coffee-wooden-board.jpg";

export const model = [
  {
    type: "title",
    value: "This is content",
    options: { styles: "color: blue; text-align: center;" },
  },
  {
    type: "text",
    value: "You will find all necessary info here",
    options: {},
  },
  {
    type: "textColumns",
    value: ["Text holder 1", "Text holder 2", "Text holder 3"],
    options: {},
  },
  {
    type: "image",
    value: imgCoffee,
    options: {
      styles: "display: block;  margin-left: auto; margin-right: auto",
    },
  },
];
