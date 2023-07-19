import { FC } from 'react'

import Button from 'components/ui/Button/Button'

import IOfferContent from 'shared/interfaces/Offer/IOfferContent'
import offerData from 'data/offerData.json'

import styles from './Offer.module.scss'

const OfferContent: FC = () => {
  const { title, description, dark_btn, ghost_btn }: IOfferContent =
    offerData.content

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{title}</h1>

      <p className={styles.description}>{description}</p>

      <div className={styles.buttonWrapper}>
        <Button
          type='anchor'
          href={dark_btn.anchor}
          text={dark_btn.text}
          className='dark'
          customClass={styles.button}
        />
        <Button
          type='anchor'
          href={ghost_btn.anchor}
          text={ghost_btn.text}
          className='ghost'
          customClass={styles.button}
        />
      </div>
    </div>
  )
}

export default OfferContent
