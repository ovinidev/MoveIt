import styles from "../styles/components/Profile.module.css"

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/62653539?v=4" alt="Vinicius Medeiros"/>
      <div>
        <strong>Vinicius Medeiros</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}