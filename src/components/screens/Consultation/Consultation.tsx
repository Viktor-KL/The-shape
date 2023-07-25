import { FC } from 'react'

import consultationData from 'data/consultationData.json'
import styles from './Consultation.module.scss'
import ConsultationHead from './ConsultationHead'
import ConsultationForm from './ConsultationForm'
import ConsultationImage from './ConsultationImage'

const Consultation: FC = () => {
  return (
    <section className={styles.section} id={consultationData.sectionId}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <ConsultationHead />
            <ConsultationForm />
          </div>
          <ConsultationImage />
        </div>
      </div>
    </section>
  )
}

export default Consultation
