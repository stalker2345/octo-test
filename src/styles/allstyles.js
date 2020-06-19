import Logo from "../components/Header/Icons/OctoberWeb.svg";

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

export const header = [
  {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    width: "30%",
    children: [Logo],
  },
  {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    width: "45%",
    children: ["Текстовый блок", "Галлерея"],
  },
  {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    width: "25%",
    children: ["Форма с приветствиями"],
  },
];

export const footer = [
  {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    width: "40%",
    flexDirection: "column;",
    children: [
      {
        width: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        height: "50%",
        children: [""],
      },

      {
        width: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        height: "50%",
        flexDirection: "flex-direction: row;",
        children: [
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "45%",
            message: "Текстовые Блоки",
          },
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
            message: "Галлерея",
          },
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "25%",
            message: "Форма",
          },
        ],
      },
    ],
  },
  {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    width: "40%",
    children: ["mail@octoberweb.ru", "+7 (981) 131-64-98"],
  },
  {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    width: "20%",
    children: ["Написать нам"],
  },
];
