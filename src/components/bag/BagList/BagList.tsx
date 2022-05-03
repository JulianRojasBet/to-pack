import { Bag } from '@/core/bag/types'
import Link from 'next/link'
import BagCard from '../BagCard'
import styles from './BagList.module.css'

interface Props {
  bags: Bag[]
}

const BagList = ({ bags }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h4 className={styles.title}>Bags</h4>
        <Link href="bag/0">
          <a className="btn">Create</a>
        </Link>
      </div>
      <div className={styles.container}>
        {bags.map(bag => <BagCard key={bag.id} bag={bag}/>)}
        {!bags.length && (
          <p className={styles.noBags}>There are not bags</p>
        )}
      </div>
    </div>
  )
}

export default BagList
