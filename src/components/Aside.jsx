import styled from "styled-components";
import { Search } from "@styled-icons/boxicons-regular";
import { NotificationsNone } from "@styled-icons/material-sharp";
import { UserCircle } from "@styled-icons/boxicons-solid";
import { Menu } from "@styled-icons/boxicons-regular";

const Aside = () => {
  return (
    <Container>
      <List>
        <SearchIcon />
      </List>
      <List>
        <AlarmIcon />
      </List>
      <List>
        <UserIcon />
      </List>
      <List>
        <Button>기업 서비스</Button>
      </List>
      <List>
        <MenuIcon />
      </List>
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

const List = styled.li`
  cursor: pointer;

  &:nth-child(-n + 4),
  &:nth-child(5) {
    margin: 0px 10px;
  }

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

const SearchIcon = styled(Search)`
  width: 24px;
`;

const AlarmIcon = styled(NotificationsNone)`
  width: 24px;
`;

const UserIcon = styled(UserCircle)`
  width: 36px;
  color: gray;
`;

const Button = styled.button`
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  margin: 0 0 0 15px;
  font-weight: 400;
  padding: 8px 12px;
  background-color: white;
  color: #666666;
  cursor: pointer;
`;

const MenuIcon = styled(Menu)`
  width: 28px;
`;

export default Aside;
