import React from 'react';
import styles from './header.module.css'
import Image from 'next/image'; 


function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <a href="https://discord.gg/CarletonUEsports">
        <Image 
          src="/assets/darkBG.png" 
          alt="raven" 
          width={60} // Provide width and height for optimization
          height={70} 
          style={{ left: "10px", top: "5px", position: 'absolute' }}
        />
      </a>
        <a href='/'>Home</a>
        <a href='/tournaments'>Tournaments</a>
        <a href='/players'>Players</a>
      </div>
    </div>
  );
}

export default React.memo(Header);