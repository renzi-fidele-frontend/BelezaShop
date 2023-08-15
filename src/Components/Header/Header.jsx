import React from 'react'
import styles from "./Header.module.css"
import logo from "../../assets/logoReal.png"

const Header = () => {
  return (
    <header id={styles.ct}>
      <img src={logo} alt="logo " />
    </header>
  )
}

export default Header