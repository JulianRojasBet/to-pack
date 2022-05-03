import { FC } from 'react'

import { Bag } from '@/core/bag/types'
import BagItem from '../BagItem/BagItem'

import styles from './BagDetail.module.css'

interface Props {
  bag: Bag
}

const BagDetail: FC<Props> = ({ bag }) => {
  return (
    <>
      {/* TODO: Send header to layout  */}
      <header className={styles.header}>
        <h3>{bag.name}</h3>
      </header>
      {/* {bag.going.items.map(item => <BagItem key={item.id} item={item} />)} */}
    </>
  )
}

export default BagDetail
