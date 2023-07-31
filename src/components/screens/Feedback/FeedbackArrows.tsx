import { FC } from 'react'
import Image from 'next/image'

import styles from './Feedback.module.scss'
import Button from 'components/ui/Button/Button'

import leftArrow from '/public/img/feedbacks/left-arrow.svg'
import rightArrow from '/public/img/feedbacks/right-arrow.svg'


const FeedbackArrows: FC = () => {
  return (
    <div className={styles.arrows}>
      <Button
        type='button'
        className='dark'
        text={<Image src={leftArrow} alt='arrow' />}
      />
      <Button
        type='button'
        className='dark'
        text={<Image src={rightArrow} alt='arrow' />}
      />
    </div>
  )
}

export default FeedbackArrows
