import styled from "styled-components";
import { useEffect, useRef } from "react";
import MenuList from "../data/MenuList_org.json";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline";

const MenuOverlay = ({ isOverlayOpened, onCloseOverlay }) => {
  const ref = useRef();

  useEffect(() => {}, []);

  useEffect(() => {
    ref.current.addEventListener("mouseleave", onCloseOverlay);
  }, [ref]);

  return (
    <Container ref={ref}>
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
  height: 80vh;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;
  z-index: 100;
  padding-top: 50px;
`;

const MenusContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  text-align: left;
  margin: 0 auto;
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
`;

const Subtitle = styled.h3`
  font-size: 13px;
  color: #999;
  padding: 5px 20px 5px 0;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ArrowIcon = styled(ArrowIosForwardOutline)`
  width: 18px;
  color: #999;
`;

const MenuETC = styled.div`
  /* margin-bottom: 12px; */
  width: 100%;
`;

const MoreBox = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
`;

export default MenuOverlay;
