import { FC, useRef } from 'react'
import Image from 'next/image'

import feedbackData from 'data/feedbacksData.json'
import styles from './Feedback.module.scss'
import FeedbackHead from './FeedbackHead'
import FeedbackContent from './FeedbackContent'
import IFeedbackHead from 'shared/interfaces/Feedback/IFeedbackHead'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import IFeedbackContent from 'shared/interfaces/Feedback/IFeedbackContent'
import Button from 'components/ui/Button/Button'

import leftArrow from '/public/img/feedbacks/left-arrow.svg'
import rightArrow from '/public/img/feedbacks/right-arrow.svg'

const Feedback: FC = () => {
  const { title, description }: IFeedbackHead = feedbackData.head

  const data: IFeedbackContent[] = feedbackData.content
  const swiperRef = useRef<any>(null)

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  return (
    <section className={styles.section} id={feedbackData.sectionId}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <div className={styles.headContent}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.arrows}>
              <Button
                type='button'
                className='dark'
                text={<Image src={leftArrow} alt='arrow' />}
                handleClick={handlePrevSlide}
              />
              <Button
                type='button'
                className='dark'
                text={<Image src={rightArrow} alt='arrow' />}
                handleClick={handleNextSlide}
              />
            </div>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            className={styles.swiper}
            ref={swiperRef}
          >
            {data.map((item, key) => (
              <SwiperSlide key={key}>
                <div className={styles.block}>
                  <h4>{item.name}</h4>
                  <div className={styles.line}></div>
                  <p className={styles.description}>{item.feedback}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Feedback
