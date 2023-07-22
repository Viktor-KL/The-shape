import { FC } from 'react'

import benefitsData from 'data/benefitsData.json'
import IBenefitsHead from 'shared/interfaces/Benefits/IBenefitsHead'

import styles from './Benefits.module.scss'

const BenefitsHead: FC = () => {
    const { title, description }:IBenefitsHead = benefitsData.head

  return (
    <div className={styles.head}>
        <h2 className={styles.styles}>{title}</h2>
        <p className={styles.description}>{description}</p>
    </div>
  )
}

export default BenefitsHead
