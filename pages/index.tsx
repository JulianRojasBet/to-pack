import type { NextPage } from 'next'
import Head from 'next/head'
import Bag from '@/core/bag/domain/Bag'
import BagList from '@/components/bag/BagList'
import styles from '../styles/pages/index.module.css'

const Home: NextPage = () => {
  const bag = new Bag('id', 'Langaruta', 0, 0)
  const bags = [ bag, bag, bag ]

  return (
    <div>
      <Head>
        <title>To Pack</title>
        <meta name="description" content="Bags list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BagList bags={bags}/>
      </main>
    </div>
  )
}

export default Home
