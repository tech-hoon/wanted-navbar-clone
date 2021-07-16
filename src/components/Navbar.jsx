// import Logo from "./Logo";
import Menu from "./Menu";
import MenuOverlay from "./MenuOverlay";
import Aside from "./Aside";
import styled from "styled-components";
import { useState, useCallback } from "react";

const Navbar = () => {
  const [isOverlayOpened, setOverlayOpened] = useState(true);
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
      <OverLay opened={isOverlayOpened}>
        <MenuOverlay onCloseOverlay={onCloseOverlay} />
      </OverLay>
    </Container>
  );
};

const Container = styled.div``;

const Logo = styled.div`
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 767px) {
    display: none;
  }
`;

const NavBox = styled.nav`
  //Mobile
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 4px 8px;
    height: 54px;
  }

  //Tablet
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 95%;
    padding: 4px 8px;
    height: 52px;
  }

  //PC
  @media (min-width: 1200px) {
    width: 95%;
    height: 50px;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color: white;
`;

const OverLay = styled.div`
  opacity: ${(props) => (props.opened ? `100%` : `0`)};
  height: ${(props) => (props.opened ? `1024px` : `0px`)};
  transition: 0.9s;
`;

export default Navbar;
