import { FC } from 'react'

import feedbackData from 'data/feedbacksData.json'
import styles from './Feedback.module.scss'
import IFeedbackHead from 'shared/interfaces/Feedback/IFeedbackHead'
import FeedbackArrows from './FeedbackArrows'

const FeedbackHead: FC = () => {
    const { title, description }: IFeedbackHead = feedbackData.head

  return (
    <div className={styles.head}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <FeedbackArrows />
    </div>
  )
}

export default FeedbackHead
