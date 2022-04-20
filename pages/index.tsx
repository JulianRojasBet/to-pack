import type { NextPage } from 'next'
import Head from 'next/head'
import { Bag } from '@/core/bag/types'
import { List } from '@/core/list/types'
import BagList from '@/components/bag/BagList'

const Home: NextPage = () => {
  const list: List = { id: 'id', name: 'name', createdAt: 0, updatedAt: 0, items: [] }
  const bag: Bag = {
    id: 'id', name: 'Langaruta', createdAt: 0, updatedAt: 0, going: list, comeback: list
  }
  const bags = [bag]

  return (
    <main className="page" >
      <Head>
        <title>To Pack</title>
        <meta name="description" content="Bags list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BagList bags={bags} />
    </main >
  )
}

export default Home
