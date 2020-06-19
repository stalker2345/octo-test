import React from "react";
import { Wrapper, Container, HeaderRow, FooterRow } from "./components/index";

function App() {
  return (
    <Wrapper>
      <div className="header">
        <Container>
          <HeaderRow></HeaderRow>
        </Container>
      </div>
      <div className="content"></div>
      <div className="footer">
        <Container>
          <FooterRow></FooterRow>
        </Container>
      </div>
    </Wrapper>
  );
}

export default App;
