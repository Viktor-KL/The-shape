import { FC } from 'react'
import Image from 'next/image'

import aboutData from 'data/aboutData.json'
import { IAboutImage } from 'shared/interfaces/About/IAboutImage'

import styles from './About.module.scss'

const AboutImage: FC = () => {
  const { url, width, height, alt }: IAboutImage = aboutData.image

  return (
    <div className={styles.content}>
      <Image src={url} width={width} height={height} alt={alt} className={styles.image} />
    </div>
  )
}

export default AboutImage
