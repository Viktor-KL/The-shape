import { FC } from 'react'
import Image from 'next/image'

import serviceData from 'data/serviceData.json'

import styles from './Service.module.scss'

const ServiceDetails: FC = () => {
  return (
    <div className={styles.image}>
      <Image />
    </div>
  )
}

export default ServiceDetails
