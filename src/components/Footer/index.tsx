import { ReactNode } from "react";

import styled from "styled-components";
import { colors, flex, indents } from "../../styles/allstyles.js";

const Footer = styled.div<{ children: ReactNode }>`
padding-top: ${indents[5]};
 
width: 100%;
  height: 236px;
  ${colors.white}
  //box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.05);
  z-level: 100;
  ${flex.display}
  ${flex.fd.row}
  padding-left: ${indents[5]};
  padding-right: ${indents[5]};
`;

export default Footer;
