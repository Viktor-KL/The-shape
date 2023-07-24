import { FC } from 'react'

import serviceData from 'data/serviceData.json'

import styles from './Service.module.scss'

const ServiceContent: FC = () => {
  return (
    <div className={styles.content}>
      <h3 className={styles.article}></h3>
      <p className={styles.description}></p>
    </div>
  )
}

export default ServiceContent
