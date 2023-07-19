import { FC } from 'react'
import Image from 'next/image'

import offerData from 'data/offerData.json'
import IOfferImage from 'shared/interfaces/Offer/IOfferImage'

import styles from './Offer.module.scss'

const OfferImage: FC = () => {
  const image: IOfferImage = offerData.image

  return (
    <div className={styles.image}>
      <Image
        src={image.url}
        blurDataURL={image.url}
        width={image.width}
        height={image.height}
        alt={image.alt}
        placeholder='blur'
      />
    </div>
  )
}

export default OfferImage
