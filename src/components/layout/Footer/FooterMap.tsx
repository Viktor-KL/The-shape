import { FC } from 'react'
import { GoogleMap } from '@react-google-maps/api'

import styles from './Footer.module.scss'

const FooterMap: FC = () => {
  return (
    <div className={styles.mapWrapper}>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20396.353893150983!2d28.624406099999998!3d50.28176799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1683283295876!5m2!1sru!2sua'
        height='185'
        loading='lazy'
        className={styles.map}
      ></iframe>
    </div>
  )
}

export default FooterMap
