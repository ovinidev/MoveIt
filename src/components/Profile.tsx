import { useContext } from "react"
import { challengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/Profile.module.css"

export function Profile(){
  const { level } = useContext(challengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/62653539?v=4" alt="Vinicius Medeiros"/>
      <div>
        <strong>Vinícius Medeiros</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}