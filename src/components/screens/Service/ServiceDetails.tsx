import { FC } from 'react'

import serviceData from 'data/serviceData.json'
import ServiceContent from './ServiceContent'

import styles from './Service.module.scss'

const ServiceDetails: FC = () => {
  return (
    <div className={styles.details}>
      <ServiceContent />
    </div>
  )
}

export default ServiceDetails
