import Bag from '@/core/bag/domain/Bag'
import Link from 'next/link'
import styles from './BagCard.module.css'

interface Props {
  bag: Bag
}

const BagCard = ({ bag }: Props) => {
  return (
    <Link href={`bag/${bag.id}`}>
      <a className={styles.container}>
        <article>
          <p className={styles.name}>{bag.name}</p>
          <div className={styles.bottom}>
            <p className="font-mono">100%</p>
            <p>{bag.createdAt}</p>
          </div>
        </article>
      </a>
    </Link>
  )
}

export default BagCard
