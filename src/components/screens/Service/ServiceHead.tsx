import { FC } from 'react'

import serviceData from 'data/serviceData.json'

import styles from './Service.module.scss'
import IServiceHead from 'shared/interfaces/Service/IServiceHead'

const ServiceHead: FC = () => {
    const { title, description }:IServiceHead = serviceData.content

  return (
    <div className={styles.head}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
    </div>
  )
}

export default ServiceHead
