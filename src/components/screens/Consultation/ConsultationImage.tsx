import { FC } from 'react'
import Image from 'next/image'

import styles from './Consultation.module.scss'
import consultationData from 'data/consultationData.json'
import IImage from 'shared/interfaces/IImage'

const ConsultationImage: FC = () => {
  const { url, width, height, alt }: IImage = consultationData.image

  return (
    <div className={styles.image}>
      <Image src={url} width={width} height={height} alt={alt} />
    </div>
  )
}

export default ConsultationImage
