import { ReactNode } from "react";

import styled from "styled-components";
//import { indents, flex } from "../../styles/allstyles.js";

const Container = styled.div<{ children: ReactNode }>`
  max-width: 1440px;
  
  margin 0px auto;
`;

export default Container;
