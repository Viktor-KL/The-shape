import { FC } from 'react'

import styles from './Consultation.module.scss'
import consultationData from 'data/consultationData.json'
import IConsultationHead from 'shared/interfaces/Consultation/IConsultationHead'

const ConsultationHead: FC = () => {
  const { title, description }:IConsultationHead =  consultationData.head

  return (
    <div className={styles.head}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default ConsultationHead
