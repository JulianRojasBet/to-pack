import { useEffect, useRef } from 'react'
import { NextPage } from 'next'

import BagDetail from '@/components/bag/BagDetail'
import Bag from '@/core/bag/domain/Bag'
import List from '@/core/list/domain/List'
import Item from '@/core/item/domain/Item'

const BagPage: NextPage = () => {
  let bag = useRef<Bag>();

  const item = new Item('id', 'Item name', false, 0, 0)
  const list = new List('id', 'name', 0, 0, [item])
  bag.current = new Bag('id', 'Langaruta', 0, 0, list, list)

  return (
    <main className="page">
      {bag.current && <BagDetail bag={bag.current}/>}
    </main>
  )
}

export default BagPage
