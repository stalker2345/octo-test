import { ReactNode } from "react";

import styled from "styled-components";
import { flex, colors } from "../../styles/allstyles.js";

const Wrapper = styled.div<{ children: ReactNode }>`
${flex.display}
${flex.fd.column}
${colors.white}
min-height: 100vh;
overflow: hidden;
`;

export default Wrapper;
