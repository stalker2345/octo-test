import { ReactNode } from "react";

import styled, { DefaultThemeHeader } from "styled-components";
import { indents, colors, fonts } from "../../styles/allstyles.js";

const HeaderColumnItem = styled.div<DefaultThemeHeader>`
  
color: ${colors.blue.slice(-8)}
  ${fonts.fontSyze(4)}
  box-shadow: 0 0 0 black;
  margin-left: ${(props) => props.marginLeft && indents[6]};
  cursor: ${(props) => props.cursor};
  font-style: normal;
font-weight: bold;

line-height: 160%;
:hover{
    color: ${colors.hoverblue.slice(-8)}
}
`;

export default HeaderColumnItem;
