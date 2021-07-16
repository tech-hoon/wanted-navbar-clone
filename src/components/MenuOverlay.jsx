import styled from "styled-components";
import { useEffect, useRef } from "react";
import MenuList from "../data/MenuList.json";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline";

const MenuOverlay = ({ opened, onCloseOverlay }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.addEventListener("mouseleave", onCloseOverlay);
  }, [ref]);

  return (
    <Container opened={opened} ref={ref}>
      <MenusContainer>
        {MenuList.map(({ title, subtitles, href }, i) => {
          return i < 6 ? (
            <MenuBox key={i}>
              <TitleBox>
                <Title>{title}</Title>
                <ArrowIcon />
              </TitleBox>
              {subtitles.length &&
                subtitles.map((subtitle, j) => {
                  return j !== subtitles.length - 1 ? (
                    <Subtitle key={j}>{subtitle}</Subtitle>
                  ) : (
                    <MoreBox key={j}>
                      <Subtitle>더보기</Subtitle>
                      <ArrowIcon />
                    </MoreBox>
                  );
                })}
            </MenuBox>
          ) : (
            <MenuBox>
              {title.map((v, j) => {
                return (
                  <MenuETC>
                    <TitleBox>
                      <Title key={j}>{v}</Title>
                      <ArrowIcon />
                    </TitleBox>
                  </MenuETC>
                );
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
  opacity: ${(props) => (props.opened ? `100%` : `0`)};
  height: ${(props) => (props.opened ? `70vh` : `0vh`)};
  transition: 0.4s;
  background-color: white;
  z-index: 100;
`;

const MenusContainer = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  text-align: left;
  margin: 0 auto;
  padding-top: 20px;
`;

const MenuBox = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 17px;
  color: #333;
  line-height: 20px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
`;

const Subtitle = styled.h3`
  font-size: 13px;
  color: #999;
  padding: 5px 20px 5px 0;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
`;

const ArrowIcon = styled(ArrowIosForwardOutline)`
  width: 18px;
  color: #999;
`;

const MenuETC = styled.div`
  width: 100%;
`;

const MoreBox = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
`;

export default MenuOverlay;
