import styled from "styled-components";

const Aside = () => {
  return (
    <Container>
      <List>icon1</List>
      <List>icon2</List>
      <List>Avatar</List>
      <List>기업 서비스</List>
      <List>icon3</List>
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  list-style: none;
`;

const List = styled.li`
  //mobile
  @media screen and (max-width: 767px) {
    &:nth-child(3),
    &:nth-child(4) {
      display: none;
    }
  }

  //tablet
  @media (min-width: 768px) and (max-width: 1199px) {
    &:nth-child(5) {
      display: none;
    }
  }

  //pc
  @media (min-width: 1200px) {
    &:nth-child(5) {
      display: none;
    }
  }
`;

export default Aside;
