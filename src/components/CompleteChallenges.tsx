import styles from "../styles/components/CompleteChallenges.module.css"

export function CompletedChallengs(){
  return(
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}