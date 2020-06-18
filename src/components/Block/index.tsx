import { ReactNode } from "react";

import styled, { DefaultThemeBlock } from "styled-components";
import { colors, flex, indents } from "../../styles/allstyles.js";

const Block = styled.div<DefaultThemeBlock>`
  ${flex.display}
  ${(props) => props.width && "width:" + props.width};
  ${(props) => props.height && "height:" + props.height};
  ${(props) => props.flexDirection && "flex-direction:" + props.flexDirection};
`;

export default Block;
