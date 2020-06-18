import { ReactNode } from "react";

import styled from "styled-components";
import { colors, flex, indents } from "../../styles/allstyles.js";

const Header = styled.div<{ children: ReactNode }>`

width: 100%;
  height: 80px;
  ${colors.white}
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.05);
  z-level: 100;
  ${flex.display}
  ${flex.fd.row}
  padding-left: ${indents[5]};
  padding-right: ${indents[5]};
`;

export default Header;
