import { ExperienceBar } from "../components/ExperienceBar";
import { CompletedChallengs } from "../components/CompleteChallenges";
import { Profile } from "../components/Profile";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";

import Head from "next/head";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move.it</title>
      </Head>

      <ExperienceBar/>

      <section>
        <div>
          <Profile/>
          <CompletedChallengs/>
          <Countdown/>
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
    </div>
  )
}
