import { FC } from 'react'
import Image from 'next/image'

import benefitsData from 'data/benefitsData.json'
import IBenefitsContent from 'shared/interfaces/Benefits/IBenefitsContent'

import styles from './Benefits.module.scss'

const BenefitsContent: FC = () => {
  const data: IBenefitsContent[] = benefitsData.content

  return (
    <div className={styles.content}>
      {data.map((item, key) => (
        <div className={styles.block} key={key}>
          <Image
            src={item.image.url}
            height={item.image.height}
            width={item.image.width}
            alt={item.image.alt}
          />
          <p className={styles.description}>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default BenefitsContent
