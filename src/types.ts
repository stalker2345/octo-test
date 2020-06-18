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
  size?: "Big";
}

export interface IWebStructure {}