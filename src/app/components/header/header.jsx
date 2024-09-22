import React from 'react';
import styles from './header.module.css'


function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <a href="https://discord.gg/CarletonUEsports">
        <img src="/assets/darkBG.png" alt="raven" style={{left: "10px", top: "5px", height: "70px", position: 'absolute'}} />
      </a>
        <a href='/'>Home</a>
        <a href='/tournaments'>Tournaments</a>
        <a href='/players'>Players</a>
      </div>
    </div>
  );
}

export default React.memo(Header);