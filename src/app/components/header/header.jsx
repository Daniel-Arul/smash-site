import styles from './header.module.css'


export default function header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <a href="https://discord.gg/CarletonUEsports">
        <img src="/assets/darkBG.png" alt="raven" style={{left: "10px", top: "0", height: "70px", position: 'absolute'}} />
      </a>
        <a href='/'>Home</a>
        <a href='/tournaments'>Tournaments</a>
        <a href='/players'>Players</a>
      </div>
    </div>
  );
}