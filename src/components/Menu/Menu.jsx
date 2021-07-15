import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <ul className={styles.body}>
      <li>탐색</li>
      <li>커리어 성장</li>
      <li>직군별 연봉</li>
      <li>이력서</li>
      <li>매치업</li>
      <li>프리랜서</li>
    </ul>
  );
};

export default Menu;
