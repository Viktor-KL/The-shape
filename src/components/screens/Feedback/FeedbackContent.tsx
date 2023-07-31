import { FC, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import feedbackData from 'data/feedbacksData.json'
import styles from './Feedback.module.scss'
import IFeedbackContent from 'shared/interfaces/Feedback/IFeedbackContent'

const FeedbackContent: FC = () => {
  const data: IFeedbackContent[] = feedbackData.content
  const swiperRef = useRef<any>(null);

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
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className='mySwiper'
        ref={swiperRef} 
      >
        {data.map((item, key) => (
          <SwiperSlide key={key}>
            <div className={styles.block}>
              <h4>{item.name}</h4>
              <p className={styles.description}>{item.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <button onClick={handlePrevSlide}>Previous</button>
        <button onClick={handleNextSlide}>Next</button>
      </div>
    </>
  )
}

export default FeedbackContent