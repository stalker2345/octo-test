export const fonts = {
  size: [12, 14, 16, 18, 20, 26, 30, 32, 40, 48, 50, 54],
  weight: { normal: "font-weight: normal;", bold: "font-weight: bold;" },
  style: "italic",
  letterspacing: ["letter-spacing: 0.2em;", "letter-spacing: 0,15em;"],
  texttransform: "uppercase",
  lineheght: ["120%", "140%", "160%"],
  fontSyze(index) {
    return `font-size: ${this.size[index]}px;`;
  },
};
export const flex = {
  display: "display: flex;",
  fd: { column: "flex-direction: column;", row: "flex-direction: row;" },
};

export const colors = {
  black: "background-color: #333333;",
  yellow: "background-color: #FFF2C3;",
  blue: "background-color: #00A4F7;",
  hoverblue: "background-color: #128ACE;",
  disabledblue: "background-color: #00A4F7;",
  grey: "background-color: #FAF9FA;",
  white: "background-color: #FFFFFF;",
};

export const indents = ["5px", "10px", "15px", "20px", "25px", "60px", "40px"];
