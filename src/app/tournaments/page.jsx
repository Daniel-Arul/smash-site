import styles from './tournaments.module.css'
import header from '../components/header/header';
import layout from '../globals.css'

async function getTournamentList() {
  let allTournaments = [];
  for(let i = 39; i >= 13; i--) {
    allTournaments.push(i);
  }
  return allTournaments;
}

export default async function Tournaments() {
  const head = header();
  const allTournaments = await getTournamentList();

  return(
    <div className={styles.all}>
      <div className={styles.title}>THE ARCHIVE</div>
      <div className={styles.container}>
          {allTournaments.map((value, key) => (
            <a className={styles.a} href={`/tournaments/${value}`} key={key}>
              <div className={styles.fadeIn} style={{ animationDelay: `${key * 0.03}s` }}>
                <div  className={styles.linkContainer}>
                  <p className={styles.link}>CLASH AT CARLETON {value}</p>
                </div>
              </div>
            </a>
          )
          )}
      </div>
    </div>
  )
}