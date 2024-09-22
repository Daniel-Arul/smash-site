"use client"

import { useState } from "react"
import Header from "../components/header/header"
import styles from "./players.module.css"





export default function Players() {
  //let head = header();
  const [name, setName] = useState("");

  const handleEventChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className={styles.all2}>
      <Header/>
      <div className={styles.all}>
        <div className={styles.title}>SEARCH FOR PLAYERS</div>
        <div className={styles.container}>
          <form action={`/players/${name}`}>
            <div className={styles.search}>
              <input type="text" placeholder="NAME" value={name} onChange={handleEventChange} className={styles.search} />
              
            </div>
            
            <button className={styles.search2} type="submit">Search</button>
          </form>
        </div>
    </div>
  </div>
  )
}