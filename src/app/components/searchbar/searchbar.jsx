import React from 'react';
import { promises as fs } from 'fs';
import styles from "./searchbar.module.css"
import playerResults from "@/app/playerresults.json"

export default async function Searchbar(props) {
  //const file = await fs.readFile(/*process.cwd() +*/ '/src/app/playerresults.json', 'utf8');
  //const data = JSON.parse(file);

  const results = playerResults[props.name]; 

  if(results == null) {
    return (<div></div>) 
  };


  return (
    <div id='0'>
      <div className={styles.playerContainer2}>
            <p >TOURNAMENT</p>
            <p className={styles.right}>PLACEMENT/SEED</p>
        </div>
      {results["prev_tournaments"].map((e, key) => (
        <div key={key} className={styles.playerContainer}>
            <p key={key}>CLASH AT CARLETON {e.tournament}</p>
            <p key={key}>{e.placement}/{e.seed}</p>
        </div>
      ))}
    </div>
  );
}