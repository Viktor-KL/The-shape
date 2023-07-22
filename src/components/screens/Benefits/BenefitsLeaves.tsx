import { FC } from 'react'
import Image from 'next/image'

import styles from './Benefits.module.scss'
import benefitsData from 'data/benefitsData.json'
import IImage from 'shared/interfaces/IImage'

const Offer: FC = () => {
  const left_leaves: IImage = benefitsData.left_leaves
  const right_leaves: IImage = benefitsData.right_leaves

  return (
    <div className={styles.leaves}>
      <Image
        src={left_leaves.url}
        alt={left_leaves.alt}
        width={left_leaves.width}
        height={left_leaves.height}
        className={styles.left_leaves}
      />
      <Image
        src={right_leaves.url}
        alt={right_leaves.alt}
        width={right_leaves.width}
        height={right_leaves.height}
        className={styles.right_leaves}
      />
    </div>
  )
}

export default Offer
