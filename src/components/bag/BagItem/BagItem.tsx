import { FC, useState } from 'react'

import Item from '@/core/item/domain/Item'
import ItemService from '@/core/item/domain/ItemService'
import ItemRESTRepository from '@/core/item/application/ItemRESTRepository'

import styles from './BagItem.module.css'

interface Props {
  item: Item
}

// TODO: Rename this component (?)
const BagItem: FC<Props> = ({ item }) => {
  const [packed, setPacked] = useState(false)
  const repo = new ItemRESTRepository()
  const service = new ItemService(repo)

  function toggle() {
    service.toggle(item)
    setPacked(prev => !prev)

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
