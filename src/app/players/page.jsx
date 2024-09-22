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
      
      <div className={styles.all}>
      <div className={styles.container2}>
        <div className={styles.title}>SEARCH FOR PLAYERS</div>
        
        <div className={styles.container}>
        
          <form action={`/players/${name}`} >
            <div className={styles.searchContainer}>
              <input type="text" placeholder="Name" value={name} onChange={handleEventChange} className={styles.search} />
              <button className={styles.search2} type="submit">Search</button>
            </div>
            
            
          </form>
        </div>
        </div>
    </div>
  </div>
  )
}