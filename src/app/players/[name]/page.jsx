import SearchBar from "@/app/components/searchbar/searchbar";
import Header from "@/app/components/header/header";
import styles from "./styles.module.css"

export default function PlayerName({params}) {
  var x = decodeURIComponent( params.name )
  console.log(x);
  return (
    <div className={styles.all2}>
      <Header/>
      <div className={styles.all}>
        <div className={styles.title}>RESULTS FOR {x}</div>
        <div className={styles.container}>
          <SearchBar name={x}/>
        </div>
    </div>
  </div>
  )
}