import { FC, useState } from 'react'

import { Item } from '@/core/item/types'

import styles from './BagItem.module.css'

interface Props {
  item: Item
}

const BagItem: FC<Props> = ({ item }) => {
  const [packed, setPacked] = useState(false)

  function toggle() {
    // TODO: Make request
    setPacked((prev) => !prev)
  }

  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input type="checkbox" checked={packed} onChange={toggle} className={styles.packed} />
        {/* TODO: Use an input for item name */}
        <span className={styles.name}>{item.name}</span>
      </label>
    </li>
  )
}

export default BagItem
