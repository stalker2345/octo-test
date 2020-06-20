import { IWebStructure } from "./types";
//@ts-ignore
import Logo from "../components/Header/Icons/OctoberWeb.svg";

export const header: Array<IWebStructure> = [
  {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    width: "30%",
    type: "block",
    onClick: "",

    children: [
      {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: "30%",
        type: "text",
        onClick: "",
        textColor: "blue",
        message: "Logo",
      },
    ],
  },
  {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    width: "45%",
    type: "block",
    onClick: "",

    children: [
      {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: "30%",
        type: "text",
        onClick: "",
        textColor: "blue",
        message: "Logo",
      },
      {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: "30%",
        type: "text",
        textColor: "blue",
        onClick: "",
        message: "Logo",
      },
    ],
  },
  {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    width: "25%",
    type: "block",
    onClick: "",

    children: [
      {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: "30%",
        type: "text",
        textColor: "blue",
        onClick: "",
        message: "Logo",
      },
    ],
  },
];
