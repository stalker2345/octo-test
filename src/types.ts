// import { IWebStructure } from "./types";
import { ReactNode } from "react";
// import * as React from "react";
// import { ThemedStyledFunction } from "styled-components";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // borderRadius: string;

    primary?: boolean;

    // colors: {
    //   main: string;
    //   secondary: string;
    // };
  }
  export interface DefaultThemeHeader extends DefaultTheme {
    cursor?: string;
    marginLeft?: boolean;
  }

  export interface DefaultThemeBlock extends DefaultTheme {
    width?: string;
    height?: string;
    flexDirection?: string;
    justify: string;
    align: string;
  }
}

export interface IButton {
  size?: string;
  primary: boolean;
  hover: string;
  type: "button";
}

export interface IInput {}

type display = "block" | "flex" | "inline-block";
//type type = "block" | "text";

interface IText extends IBlock {
  type: "text";
  margin?: string;
  message?: string;
  textColor: string;
}

interface IBlock {
  readonly display: display;
  width?: string;
  height?: string;
  flexDirection?: string;
  justifyContent: string;
  alignItems: string;
  onClick: string;
  padding?: string;
  margin?: string;
}

interface IFlexBlock {}

export interface IWebStructure extends IBlock {
  type: "block";
  children?: Array<IWebStructure | IInput | IButton | IText>;
}
