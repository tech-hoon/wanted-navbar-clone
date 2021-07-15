import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import MenuInfo from "../MenuInfo/MenuInfo";
import Aside from "../Aside/Aside";

import styles from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [isNavbarOpened, setNavbarOpen] = useState(false);

  return (
    <nav className={styles.body}>
      <Logo />
      <Menu />
      <Aside />
      {isNavbarOpened && <MenuInfo />}
    </nav>
  );
};

export default Navbar;
