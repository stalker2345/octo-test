import React from "react";
import { Wrapper, Container, HeaderRow, Footer } from "./components/index";

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
          <Footer>
            <></>
          </Footer>
        </Container>
      </div>
    </Wrapper>
  );
}

export default App;
