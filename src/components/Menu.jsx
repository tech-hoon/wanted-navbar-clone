import { useRef, useEffect } from "react";
import styled from "styled-components";
import MenuOverlay from "./MenuOverlay";

const Menu = ({ isOverlayOpened, onOpenOverlay, onCloseOverlay }) => {
  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.addEventListener("mouseenter", onOpenOverlay);
  }, [buttonRef]);

  return (
    <Container>
      <List>홈</List>
      <List id="search" ref={buttonRef}>
        탐색
      </List>
      <List>커리어 성장</List>
      <List>직군별 연봉</List>
      <List>이력서</List>
      <List>매치업</List>
      <List>프리랜서</List>
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
`;

const List = styled.li`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  cursor: pointer;

  &:nth-child(2) {
    color: red;
  }

  //Mobile
  @media screen and (max-width: 767px) {
    padding: 0px 10px;

    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7) {
      display: none;
    }
  }

  //Tablet
  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 0px 8px;

    &:nth-child(1) {
      display: none;
    }
  }

  //PC
  @media (min-width: 1200px) {
    padding: 0px 20px;

    &:nth-child(1) {
      display: none;
    }
  }
`;

export default Menu;
