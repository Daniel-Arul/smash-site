import styles from './styles.module.css';
import header from '@/app/components/header/header';
import { promises as fs } from 'fs';
import tournamentData from "@/app/tournamentdata.json"



export default async function Players({params}) {
  /*const file = await fs.readFile(process.cwd() + '/src/app/tournamentdata.json', 'utf8');
  const data = JSON.parse(file);*/
  const data = tournamentData;
  const res = data[`CAC${params.id}`]

  for(let player of res) {
    if(player.player.user == null) {
      player.player.user = {images: [{url: "/assets/smashlogo.png"}]}
    }
    if(player.player.user.images.length == 0) {
      player.player.user.images.push({url: "/assets/smashlogo.png"})
    }
  }
  return(
    <div className={styles.bg}>
      <div className={styles.overflow}>
        <div className={styles.all}>
          <h1 className={styles.pixel}>CLASH AT CARLETON #{params.id} RESULTS:</h1>
          {res.map((player, key)=> (
            <div key={player.placement} className={styles.playerContainer}>
              <div>
                <h1 className={styles.placement}>{player.placement}</h1>
                <p><strong>Seed:</strong> {player.entrant.seeds[0].seedNum}</p>
              </div> 
              <div className={styles.playerPfp}>
                <img className={styles.picture} src={player.player.user.images[0].url}></img>
              </div>
              <div className={styles.playerInfo}>
                <h1>{player.entrant.name}</h1>

              </div>

              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}