// This is home or '/' route

import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
      <Head>
          <title>{`Zak's Next App`}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.Head}>A Homepage</h1>
    </>
  )
}

export default Home;
