import type { NextPage } from 'next'
import Head from 'next/head'
import Bag from '@/core/bag/domain/Bag'
import BagList from '@/components/bag/BagList'
import styles from '../styles/pages/index.module.css'
import List from '@/core/list/domain/List'

const Home: NextPage = () => {
  const list = new List('id', 'name', 0, 0, [])
  const bag = new Bag('id', 'Langaruta', 0, 0, list, list)
  const bags = [bag]

  return (
    <main className="page">
      <Head>
        <title>To Pack</title>
        <meta name="description" content="Bags list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BagList bags={bags} />
    </main>
  )
}

export default Home
