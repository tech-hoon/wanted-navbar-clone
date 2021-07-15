// import Logo from "./Logo";
import Menu from "./Menu";
import MenuOverlay from "./MenuOverlay";
import Aside from "./Aside";
import styled from "styled-components";
import { useState, useCallback } from "react";

const Navbar = () => {
  const [isOverlayOpened, setOverlayOpened] = useState(false);
  const onOpenOverlay = useCallback(() => setOverlayOpened(true), []);
  const onCloseOverlay = useCallback(() => setOverlayOpened(false), []);

  return (
    <Container>
      <NavBox>
        <Logo>wanted</Logo>
        <Menu
          isOverlayOpened={isOverlayOpened}
          onOpenOverlay={onOpenOverlay}
          onCloseOverlay={onCloseOverlay}
        />
        <Aside />
      </NavBox>
      {isOverlayOpened && <MenuOverlay onCloseOverlay={onCloseOverlay} />}
    </Container>
  );
};

const Container = styled.div``;

const Logo = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

const NavBox = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 50px;
  margin: auto;
  background-color: white;
`;

export default Navbar;
