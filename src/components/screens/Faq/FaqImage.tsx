import { FC } from 'react'
import Image from 'next/image'

import styles from './Faq.module.scss'
import faqData from 'data/faqData.json'
import IImage from 'shared/interfaces/IImage'

const FaqImage: FC = () => {
  const { url, alt, height, width }: IImage = faqData.image
  return (
    <div className={styles.imageWraapper}>
      <Image className={styles.image} src={url} alt={alt} height={height} width={width} />
    </div>
  )
}

export default FaqImage
