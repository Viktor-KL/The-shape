import { FC } from 'react'
import Image from 'next/image'

import offerData from 'data/offerData.json'

import styles from './Offer.module.scss'
import IImage from 'shared/interfaces/IImage'

const OfferImage: FC = () => {
  const image: IImage = offerData.image

  return (
    <Image
      src={image.url}
      blurDataURL={image.url}
      width={image.width}
      height={image.height}
      alt={image.alt}
      placeholder='blur'
      style={{ width: '100%', height: 'auto' }}
      className={styles.image}
    />
  )
}

export default OfferImage
