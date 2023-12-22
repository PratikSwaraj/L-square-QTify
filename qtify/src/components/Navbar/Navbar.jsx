import React from "react";
import Button from "../../components/Button/Button";
import Search from "../../components/Search/Search";
import { ReactComponent as Logo } from "../../assets/qtifylogo.svg";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo className={styles.logo}/>
      <Search placeholder={"Search a album of your choice"}></Search>
      <Button />
    </div>
  );
}

export default Navbar;
