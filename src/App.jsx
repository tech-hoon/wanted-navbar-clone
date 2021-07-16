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
        <SampleImg />
      </Container>
    </>
  );
};

const GlobalStyles = createGlobalStyle`
  ${reset}
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: gray; */
`;

const StyledNavbar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  margin: 0 auto;
`;

const SampleImg = styled.img`
  src: "https://static.wanted.co.kr/images/events/1389/dd9ef0b8.png";
  width: 100%;
`;

export default App;
