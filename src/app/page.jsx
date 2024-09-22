import cssLayout from './globals.css';
import styles from './home.module.css';
import header from './components/header/header';


export default function Home() {
  const head = header();
  return (
    <div style={{overflowX: "hidden"}}>
      {head}
      <div className={styles.all}> 
        <div className={styles.background}>
          <div className={styles.twinkling}></div>
          <div className={styles.epicTitle}>
            <span className={styles.pixelName}>PRESENTING...</span>
            <a href="https://start.gg/cac">
            <img src="/assets/CacLogo.png" alt=""  className={styles.cacLogo}  />
            </a>
            <span className={styles.pixelName2}>CLICK THE LOGO TO SIGN UP!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

    /*<div>
      
      <div className={styles.container}>
        <div className={styles.all}>
          
        </div>
      </div>

        <div className={styles.title}>
          <img src="/assets/CAC_logo_T_L.png" alt="TEST"/>
          <div className={styles.name}>
            <h1 className='paladins' ><span style={{color: 'red'}}>Clash At</span> Carleton</h1>
          </div>
          <br />
          <br />
          <div className={styles.buttons}>
            <a href="https://start.gg/cac" className={styles.button} target='_blank'>Sign Up</a>
            <a href="tournaments" className={styles.button}>View Tournaments</a>
          </div>
        </div>
    </div>*/
