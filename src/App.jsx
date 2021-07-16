import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <StyledNavbar>
          <Navbar />
        </StyledNavbar>
      </Container>
    </>
  );
};

const GlobalStyles = createGlobalStyle`
  ${reset}
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #999999;
`;

const StyledNavbar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  margin: 0 auto;
`;

export default App;
