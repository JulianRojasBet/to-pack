import type { NextPage } from 'next'

import type { Bag } from '@/core/bag/types'
import type { Item } from '@/core/item/types'
import type { List } from '@/core/list/types/List'

import Head from 'next/head'

import BagDetail from '@/components/bag/BagDetail'

const BagPage: NextPage = () => {
  const item: Item = { id: 'id', name: 'Item name', packed: false, createdAt: 0, updatedAt: 0 }
  const list: List = {
    id: 'id', name: 'name', createdAt: 0, updatedAt: 0, items: [item]
  }
  const bag: Bag = {
    id: 'id', name: 'Langaruta', createdAt: 0, updatedAt: 0, going: list, comeback: list
  }

  return (
    <main className="page" >
      <Head>
        <title>{`${bag.name}'s bag`}</title>
        <meta name="description" content={`${bag.name}'s bag`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {bag && <BagDetail bag={bag} />}
    </main >
  )
}

export default BagPage
