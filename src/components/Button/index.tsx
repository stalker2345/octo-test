import styled, { DefaultTheme } from "styled-components";
import { indents, colors } from "../../styles/allstyles.js";

const RedButton = styled.button<DefaultTheme>`
  color: ${(props) => (props.primary ? "blue" : "red")};
`;

export default RedButton;
