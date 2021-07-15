import styled from "styled-components";
import { useEffect, useRef } from "react";
import MenuList from "../data/MenuList.json";

const MenuOverlay = ({ isOverlayOpened, onCloseOverlay }) => {
  const ref = useRef();

  useEffect(() => {}, []);

  useEffect(() => {
    // ref.current.addEventListener("mouseleave", onCloseOverlay);
  }, [ref]);

  return (
    <Container ref={ref}>
      <MenusContainer>
        {MenuList.map(({ titles, href }, key1) => {
          return (
            <MenuBox>
              {titles.map((title) => {
                return <Title>{title}</Title>;
              })}
            </MenuBox>
          );
        })}
      </MenusContainer>
    </Container>
  );
};

const Container = styled.div`
  top: 50px;
  position: fixed;
  width: 100%;
  height: 80vh;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;
  z-index: 100;
`;

const MenusContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: left;
  padding: 50px;
`;

const MenuBox = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  &:nth-child(1) {
    color: blue;
  }
`;
// const Subtitles = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Sub = styled.h3``;

// const TitleETC = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

export default MenuOverlay;
