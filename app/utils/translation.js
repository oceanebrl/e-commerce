// colors translation

const translations = {
  black: "noir",
  blue: "bleu",
  brow: "marron",
  gray: "gris",
  green: "vert",
  pink: "rose",
  red: "rouge",
  violet: "violet",
  white: "blanc",
  yellow: "jaune",
};

export const translateColor = (color) => translations[color] || color;
